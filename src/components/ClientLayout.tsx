'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import BottomNav from './BottomNav';

// These routes show NO shell at all (no header, no bottom nav)
const HIDE_SHELL = ['/auth', '/onboarding'];

// These routes hide the app Header but keep the BottomNav
// (the page supplies its own top bar)
const HIDE_HEADER_ONLY = ['/interview'];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideShell = HIDE_SHELL.some(p => pathname.startsWith(p));
    const hideHeaderOnly = HIDE_HEADER_ONLY.some(p => pathname.startsWith(p));

    if (hideShell) {
        return <>{children}</>;
    }

    const isSwipe = pathname.startsWith('/swipe');
    const isInterview = pathname.startsWith('/interview');

    return (
        <div className="app">
            {!hideHeaderOnly && <Header />}
            <div
                className="content"
                style={{
                    overflow: isSwipe || isInterview ? 'hidden' : 'auto',
                }}
            >
                {children}
            </div>
            <BottomNav />
        </div>
    );
}
