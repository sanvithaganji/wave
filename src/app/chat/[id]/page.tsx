'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Chat, Message } from '@/lib/types';
import Avatar from '@/components/Avatar';
import { HiOutlineArrowLeft, HiOutlinePhone, HiOutlineVideoCamera, HiOutlinePaperAirplane } from 'react-icons/hi';
import { formatDistanceToNow } from 'date-fns';

export default function ChatRoomPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const chatId = params.id as string;
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  // Fetch chat info
  useEffect(() => {
    if (!chatId) return;
    const fetchChat = async () => {
      const chatDoc = await getDoc(doc(db, 'chats', chatId));
      if (chatDoc.exists()) {
        setChat({ id: chatDoc.id, ...chatDoc.data() } as Chat);
      }
    };
    fetchChat();
  }, [chatId]);

  // Listen for messages
  useEffect(() => {
    if (!chatId) return;

    const q = query(
      collection(db, 'messages'),
      where('chatId', '==', chatId),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data(),
      } as Message));
      setMessages(msgs);
      // Scroll to bottom
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSend = async () => {
    if (!newMessage.trim() || !user || !profile || !chatId) return;
    setSending(true);

    try {
      await addDoc(collection(db, 'messages'), {
        chatId,
        senderId: user.uid,
        senderCodeName: profile.codeName,
        text: newMessage.trim(),
        timestamp: new Date().toISOString(),
        type: 'text',
      });

      await updateDoc(doc(db, 'chats', chatId), {
        lastMessage: newMessage.trim(),
        lastMessageAt: new Date().toISOString(),
      });

      setNewMessage('');
      inputRef.current?.focus();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getChatName = () => {
    if (!chat || !user) return 'Chat';
    if (chat.type === 'group') return chat.projectName || 'Group Chat';
    const otherNames = Object.entries(chat.participantNames)
      .filter(([uid]) => uid !== user.uid)
      .map(([, name]) => name);
    return otherNames[0] || 'Unknown';
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const chatName = getChatName();

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 safe-top">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/chat')}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <HiOutlineArrowLeft className="text-lg" />
            </button>
            <Avatar codeName={chatName} size="sm" />
            <div>
              <h1 className="text-sm font-bold">{chatName}</h1>
              <p className="text-[10px] text-gray-400">
                {chat?.type === 'group'
                  ? `${chat.participants.length} members`
                  : 'Online'}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <HiOutlinePhone className="text-lg" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <HiOutlineVideoCamera className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg) => {
            const isOwn = msg.senderId === user?.uid;
            const isSystem = msg.type === 'system';

            if (isSystem) {
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <div className="bg-gray-100 rounded-full px-4 py-1.5">
                    <p className="text-[10px] text-gray-500 text-center">{msg.text}</p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] ${isOwn ? 'items-end' : 'items-start'}`}>
                  {!isOwn && chat?.type === 'group' && (
                    <p className="text-[10px] text-gray-400 font-medium mb-1 ml-3">
                      {msg.senderCodeName}
                    </p>
                  )}
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${
                      isOwn
                        ? 'bg-black text-white rounded-br-md'
                        : 'bg-gray-100 text-black rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <p className={`text-[9px] text-gray-400 mt-1 ${isOwn ? 'text-right mr-2' : 'ml-2'}`}>
                    {formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-100 bg-white safe-bottom">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm focus:bg-white focus:ring-1 focus:ring-black transition-all"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            disabled={!newMessage.trim() || sending}
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <HiOutlinePaperAirplane className="text-lg rotate-90" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
