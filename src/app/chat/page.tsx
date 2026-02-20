'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Chat } from '@/lib/types';
import BottomNav from '@/components/BottomNav';
import Avatar from '@/components/Avatar';
import { HiOutlineUserGroup, HiOutlineUser } from 'react-icons/hi';
import { formatDistanceToNow } from 'date-fns';

export default function ChatListPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeTab, setActiveTab] = useState<'individual' | 'group'>('individual');
  const [loadingChats, setLoadingChats] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'chats'),
      where('participants', 'array-contains', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatList = snapshot.docs
        .map(d => ({ id: d.id, ...d.data() } as Chat))
        .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
      setChats(chatList);
      setLoadingChats(false);
    });

    return () => unsubscribe();
  }, [user]);

  const filteredChats = chats.filter(c => c.type === activeTab);

  const getChatName = (chat: Chat) => {
    if (chat.type === 'group') {
      return chat.projectName || 'Group Chat';
    }
    // For individual chats, show the other person's codeName
    if (!user) return 'Chat';
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

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">Messages</h1>
          <p className="text-xs text-gray-400 mt-0.5">{chats.length} conversations</p>
        </div>

        {/* Tabs */}
        <div className="max-w-lg mx-auto px-6 pb-3 flex gap-2">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'individual'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <HiOutlineUser className="text-sm" />
            Personal
          </button>
          <button
            onClick={() => setActiveTab('group')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'group'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <HiOutlineUserGroup className="text-sm" />
            Groups
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="max-w-lg mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 180px)' }}>
        {loadingChats ? (
          <div className="flex justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
            />
          </div>
        ) : filteredChats.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">{activeTab === 'individual' ? '💬' : '👥'}</p>
            <p className="text-sm text-gray-400">
              {activeTab === 'individual'
                ? 'No conversations yet. Swipe to match!'
                : 'No group chats yet. Join a project!'}
            </p>
          </div>
        ) : (
          <AnimatePresence>
            {filteredChats.map((chat, i) => {
              const chatName = getChatName(chat);
              return (
                <motion.button
                  key={chat.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => router.push(`/chat/${chat.id}`)}
                  className="w-full flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors text-left border-b border-gray-50"
                >
                  <Avatar
                    codeName={chatName}
                    size={chat.type === 'group' ? 'lg' : 'md'}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold truncate">{chatName}</h3>
                      <span className="text-[10px] text-gray-400 ml-2 flex-shrink-0">
                        {formatDistanceToNow(new Date(chat.lastMessageAt), { addSuffix: false })}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 truncate mt-0.5">
                      {chat.lastMessage}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
