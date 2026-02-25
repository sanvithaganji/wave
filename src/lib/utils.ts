import { Report } from './types';

/**
 * Report a user via the MongoDB API.
 * Rating decreases by 0.5 per report. After 3 reports, account is deactivated.
 */
export async function reportUser(
  reportedUid: string,
  _reporterUid: string,
  reason: string
): Promise<{ success: boolean; deactivated: boolean; message: string }> {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('waves_token') : null;
    if (!token) return { success: false, deactivated: false, message: 'Not authenticated' };

    const res = await fetch(`/api/users/${reportedUid}/report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ reason }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, deactivated: false, message: data.error || 'Failed to submit report' };
    }
    return data;
  } catch (error) {
    console.error('Error reporting user:', error);
    return { success: false, deactivated: false, message: 'Failed to submit report' };
  }
}

/** Get JWT token from localStorage */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('waves_token');
}

/** Authenticated fetch helper — automatically attaches Authorization header */
export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const token = getToken();
  return fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
}

