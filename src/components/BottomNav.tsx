'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiOutlineViewGrid, HiOutlineSwitchHorizontal, HiOutlineChat, HiOutlineUser } from 'react-icons/hi';

const tabs = [
  { href: '/projects', icon: HiOutlineViewGrid, label: 'Projects' },
  { href: '/swipe', icon: HiOutlineSwitchHorizontal, label: 'Discover' },
  { href: '/chat', icon: HiOutlineChat, label: 'Chat' },
  { href: '/profile', icon: HiOutlineUser, label: 'Profile' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 safe-bottom z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <button
              key={tab.href}
              onClick={() => router.push(tab.href)}
              className="relative flex flex-col items-center justify-center w-16 h-full transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-black rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <tab.icon
                className={`text-2xl transition-all duration-200 ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-[10px] mt-1 font-medium transition-all duration-200 ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
