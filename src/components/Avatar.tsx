'use client';

import { getInitials, getAvatarPattern } from '@/lib/codenames';

interface AvatarProps {
  codeName: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
  xl: 'w-20 h-20 text-2xl',
};

export default function Avatar({ codeName, size = 'md' }: AvatarProps) {
  const { bg, text } = getAvatarPattern(codeName);
  const initials = getInitials(codeName);

  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center font-bold select-none border border-gray-200`}
      style={{ backgroundColor: bg, color: text }}
    >
      {initials}
    </div>
  );
}
