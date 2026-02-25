'use client';

import { useState } from 'react';

const NOTIFICATIONS = [
    { id: 1, icon: "✉︎", title: "New Match!", text: "You and Neon Moth both swiped right. Start collaborating!", time: "2 min ago" },
    { id: 2, icon: "⌯⌲", title: "Interest Received", text: "Someone pressed 'Interested' on your MediAssist AI project.", time: "18 min ago" },
    { id: 3, icon: "✔", title: "Request Approved", text: "Marble Fox approved your request to join TrailSync.", time: "1h ago" },
    { id: 4, icon: "🗨", title: "Group Created", text: "You've been added to the MediAssist AI Team chat.", time: "2h ago" },
    { id: 5, icon: "★", title: "Collaboration Complete", text: "FarmLink Protocol has been marked complete. Your score updated!", time: "1d ago" },
];

export default function Header() {
    const [notifOpen, setNotifOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="header-logo">wave</div>
                <button className="notif-btn" onClick={() => setNotifOpen(true)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    <div className="notif-dot" />
                </button>
            </div>

            <div className={`notif-panel ${notifOpen ? 'open' : ''}`}>
                <div className="notif-header">
                    <button className="notif-back" onClick={() => setNotifOpen(false)}>←</button>
                    <div className="notif-title">Notifications</div>
                </div>
                <div className="notif-list">
                    {NOTIFICATIONS.map(n => (
                        <div className="notif-item" key={n.id}>
                            <div className="notif-icon">{n.icon}</div>
                            <div className="notif-text">
                                <strong>{n.title}</strong>
                                <p>{n.text}</p>
                                <div className="nt">{n.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
