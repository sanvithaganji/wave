const adjectives = [
  'Anonymous', 'Mysterious', 'Silent', 'Shadow', 'Cosmic',
  'Stellar', 'Quantum', 'Nebula', 'Cipher', 'Phantom',
  'Arctic', 'Lunar', 'Solar', 'Thunder', 'Crystal',
  'Velvet', 'Midnight', 'Digital', 'Binary', 'Pixel',
  'Stealth', 'Turbo', 'Nimble', 'Swift', 'Clever',
  'Bold', 'Brave', 'Calm', 'Daring', 'Eager',
  'Fierce', 'Gentle', 'Hidden', 'Iron', 'Jade',
  'Keen', 'Lively', 'Noble', 'Onyx', 'Prime',
];

const animals = [
  'Dolphin', 'Falcon', 'Panther', 'Wolf', 'Eagle',
  'Tiger', 'Hawk', 'Lynx', 'Raven', 'Fox',
  'Otter', 'Puma', 'Cobra', 'Owl', 'Bear',
  'Shark', 'Crane', 'Viper', 'Stag', 'Lion',
  'Jaguar', 'Heron', 'Bison', 'Gecko', 'Koala',
  'Lemur', 'Manta', 'Newt', 'Ocelot', 'Panda',
  'Quail', 'Robin', 'Seal', 'Toucan', 'Urchin',
  'Vulture', 'Wombat', 'Xerus', 'Yak', 'Zebra',
  'Liger', 'Pegasus', 'Phoenix', 'Griffin', 'Dragon',
  'Sphinx', 'Hydra', 'Kraken', 'Chimera', 'Unicorn',
];

export function generateCodeName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adj} ${animal}`;
}

export function getInitials(codeName: string): string {
  return codeName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

// Generate a consistent avatar pattern from codename
export function getAvatarPattern(codeName: string): { bg: string; text: string } {
  const patterns = [
    { bg: '#000000', text: '#FFFFFF' },
    { bg: '#1a1a1a', text: '#FFFFFF' },
    { bg: '#333333', text: '#FFFFFF' },
    { bg: '#4d4d4d', text: '#FFFFFF' },
    { bg: '#666666', text: '#FFFFFF' },
    { bg: '#FFFFFF', text: '#000000' },
    { bg: '#f0f0f0', text: '#000000' },
    { bg: '#e0e0e0', text: '#000000' },
  ];
  
  let hash = 0;
  for (let i = 0; i < codeName.length; i++) {
    hash = codeName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return patterns[Math.abs(hash) % patterns.length];
}
