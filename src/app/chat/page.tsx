'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';

const MOCK_CHATS = [
  {
    id: 'c1', name: "Neon Moth", emoji: "𐦍", last: "can you push the backend changes?", time: "now", unread: 3, online: true, isGroup: false,
    messages: [
      { id: 1, text: "hey! we got matched, saw your Rust experience", sent: false, time: "10:02" },
      { id: 2, text: "yeah! working on something with distributed systems, need a co-founder basically", sent: true, time: "10:04" },
      { id: 3, text: "that's exactly what I'm looking for. what stack?", sent: false, time: "10:05" },
      { id: 4, text: "Rust + Kafka + React. scalable realtime data pipeline", sent: true, time: "10:06" },
      { id: 5, text: "can you push the backend changes?", sent: false, time: "10:45" },
    ]
  },
  {
    id: 'c2', name: "MediAssist AI Team", emoji: "⚕", last: "Dusk Raven: demo is tomorrow at 3pm", time: "2h", unread: 1, online: false, isGroup: true,
    messages: [
      { id: 1, text: "okay team, we need to finalize the offline mode feature", sent: false, time: "8:00", from: "Swift Lynx" },
      { id: 2, text: "I'll handle the SQLite migration tonight", sent: true, time: "8:12" },
      { id: 3, text: "great! UI polish is done btw, looks clean", sent: false, time: "8:15", from: "Marble Fox" },
      { id: 4, text: "demo is tomorrow at 3pm", sent: false, time: "10:20", from: "Dusk Raven" },
    ]
  },
];

export default function ChatPage() {
  const { user, profile } = useAuth();
  const [chats, setChats] = useState<any[]>(MOCK_CHATS);
  const [localMsgs, setLocalMsgs] = useState<Record<string, any[]>>({});
  const [openChat, setOpenChat] = useState<any>(null);
  const [liveMessages, setLiveMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isApi, setIsApi] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  // Load real chats from API
  useEffect(() => {
    if (!user) return;
    const token = localStorage.getItem('waves_token');
    const loadChats = async () => {
      try {
        const res = await fetch('/api/chats', { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) return;
        const { chats: apiChats } = await res.json();
        if (!apiChats || apiChats.length === 0) return;
        setIsApi(true);
        const loaded = apiChats.map((c: any) => {
          const isGroup = !!c.projectId;
          const otherId = (c.participants || []).find((id: string) => id !== user.uid);
          let name = 'Unknown', emoji = '?';
          if (isGroup && c.projectName) { name = c.projectName; emoji = '👥'; }
          else if (otherId && c.participantNames?.[otherId]) { name = c.participantNames[otherId]; emoji = name[0] || '?'; }
          const timeStr = c.lastMessageAt ? new Date(c.lastMessageAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          return { id: c.chatId || c._id, name, emoji, last: c.lastMessage || 'No messages yet', time: timeStr, isGroup, unread: 0, online: false };
        });
        setChats(loaded);
      } catch { /* keep mock chats */ }
    };
    loadChats();
  }, [user]);

  // Poll messages when a chat is open
  const fetchMessages = useCallback(async (chatId: string) => {
    if (!isApi || !user) return;
    const token = localStorage.getItem('waves_token');
    try {
      const res = await fetch(`/api/chats/${chatId}/messages`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) return;
      const { messages } = await res.json();
      const msgs = (messages || []).map((m: any) => ({
        id: m._id, text: m.text, sent: m.senderId === user.uid,
        time: new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        from: m.senderCodeName,
      }));
      setLiveMessages(msgs);
      setTimeout(() => messagesEnd.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch { /* graceful */ }
  }, [isApi, user]);

  useEffect(() => {
    if (openChat && isApi) {
      fetchMessages(openChat.id);
      pollRef.current = setInterval(() => fetchMessages(openChat.id), 3000);
    }
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [openChat, isApi, fetchMessages]);

  useEffect(() => {
    if (openChat) setTimeout(() => messagesEnd.current?.scrollIntoView(), 100);
  }, [openChat]);

  const getMessages = () => {
    if (!openChat) return [];
    if (isApi) return liveMessages;
    return localMsgs[openChat.id] || openChat.messages || [];
  };

  const sendMessage = async () => {
    if (!input.trim() || !openChat) return;
    const text = input.trim(); setInput('');
    if (isApi && user) {
      const token = localStorage.getItem('waves_token');
      try {
        await fetch(`/api/chats/${openChat.id}/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ text }),
        });
        fetchMessages(openChat.id);
      } catch { }
    } else {
      const newMsg = { id: Date.now(), text, sent: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setLocalMsgs(prev => ({ ...prev, [openChat.id]: [...(prev[openChat.id] || openChat.messages || []), newMsg] }));
      setTimeout(() => messagesEnd.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') sendMessage(); };

  if (openChat) {
    const msgs = getMessages();
    return (
      <div className="chat-view">
        <div className="chat-view-header">
          <button className="back-btn" onClick={() => setOpenChat(null)}>←</button>
          <div className="chat-avatar" style={{ width: 38, height: 38, fontSize: 16, borderRadius: openChat.isGroup ? '10px' : '50%' }}>{openChat.emoji}</div>
          <div className="chat-view-info">
            <div className="chat-view-name">{openChat.name}</div>
            <div className="chat-view-status">{openChat.isGroup ? 'Group · tap to call' : openChat.online ? '● Online' : 'Last seen recently'}</div>
          </div>
          <div className="chat-view-actions">
            <button className="call-btn">📞</button>
            <button className="call-btn">📷</button>
          </div>
        </div>
        <div className="messages-area">
          {msgs.map((m: any) => (
            <div key={m.id} className={`msg ${m.sent ? 'sent' : 'recv'}`}>
              {!m.sent && openChat.isGroup && m.from && <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>{m.from}</div>}
              {m.text}
              <div className="msg-time">{m.time}</div>
            </div>
          ))}
          {msgs.length === 0 && <div style={{ color: 'var(--muted)', fontSize: 13, textAlign: 'center', paddingTop: 20 }}>No messages yet. Say hi! 👋</div>}
          <div ref={messagesEnd} />
        </div>
        <div className="chat-input-row">
          <input className="chat-input" placeholder="Message..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} />
          <button className="send-btn" onClick={sendMessage}>➤</button>
        </div>
      </div>
    );
  }

  const dm = chats.filter(c => !c.isGroup);
  const groups = chats.filter(c => c.isGroup);

  return (
    <div className="chat-wrap slide-up">
      <h2 className="section-title" style={{ marginBottom: 16 }}>Messages</h2>
      <div className="chat-section-title">Direct Messages</div>
      {dm.map(c => (
        <div key={c.id} className="chat-item" onClick={() => setOpenChat(c)}>
          <div className="chat-avatar">{c.emoji}<div className={`online-dot ${c.online ? 'active' : ''}`} /></div>
          <div className="chat-info"><div className="chat-name">{c.name}</div><div className="chat-preview">{c.last}</div></div>
          <div className="chat-meta"><div className="chat-time">{c.time}</div>{c.unread > 0 && <div className="unread-badge">{c.unread}</div>}</div>
        </div>
      ))}
      <div className="divider" />
      <div className="chat-section-title">Group Chats</div>
      {groups.map(c => (
        <div key={c.id} className="chat-item" onClick={() => setOpenChat(c)}>
          <div className="chat-avatar group">{c.emoji}</div>
          <div className="chat-info"><div className="chat-name">{c.name}</div><div className="chat-preview">{c.last}</div></div>
          <div className="chat-meta"><div className="chat-time">{c.time}</div>{c.unread > 0 && <div className="unread-badge">{c.unread}</div>}</div>
        </div>
      ))}
    </div>
  );
}
