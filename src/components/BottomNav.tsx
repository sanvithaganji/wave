'use client';

import { usePathname, useRouter } from 'next/navigation';

const tabs = [
  {
    key: 'projects', href: '/projects', label: 'Projects',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
  },
  {
    key: 'swipe', href: '/swipe', label: 'Discover',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3C8 3 4 6 4 10c0 5 8 11 8 11s8-6 8-11c0-4-4-7-8-7z" /></svg>
  },
  {
    key: 'interview', href: '/interview', label: 'Scout',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" /><path d="M12 14c-5 0-8 2.5-8 4v1h16v-1c0-1.5-3-4-8-4z" /><path d="M17 9l2 2 4-4" /></svg>
  },
  {
    key: 'chat', href: '/chat', label: 'Chat',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
  },
  {
    key: 'profile', href: '/profile', label: 'Profile',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="bottom-nav">
      {tabs.map(t => (
        <button key={t.key} className={`nav-item ${pathname.startsWith(t.href) ? 'active' : ''}`} onClick={() => router.push(t.href)}>
          {t.icon}
          <span className="nav-label">{t.label}</span>
        </button>
      ))}
    </div>
  );
}
