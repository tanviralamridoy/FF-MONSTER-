// Fix: Import 'Tournament' type to resolve reference errors.
import { Role, Player, GuildInfo, Tournament } from './types';

export const ADMIN_UID = '3000927280';
export const ADMIN_NAME = 'Tanvir Alam Hridoy';

export const BADGE_DEFINITIONS: { [key: string]: { icon: string; color: string; description: string } } = {
  'Guild Leader': { icon: '👑', color: 'bg-red-600 text-white', description: 'The founder and leader of the guild.' },
  'MVP': { icon: '🏆', color: 'bg-yellow-500 text-white', description: 'Most Valuable Player in a recent tournament.' },
  'Top Fragger': { icon: '💥', color: 'bg-orange-500 text-white', description: 'Consistently high kill count.' },
  'Strategist': { icon: '🧠', color: 'bg-blue-500 text-white', description: 'Mastermind of guild strategies.' },
  'Veteran': { icon: '🛡️', color: 'bg-gray-500 text-white', description: 'A long-standing, loyal member.' },
  'Rising Star': { icon: '⭐', color: 'bg-green-500 text-white', description: 'A promising new talent.' }
};

export const AVAILABLE_BADGES = Object.keys(BADGE_DEFINITIONS).filter(b => b !== 'Guild Leader');

export const TOURNAMENT_TYPES: Array<Tournament['type']> = ['BR', 'CS'];
export const TOURNAMENT_MODES: Array<Tournament['mode']> = ['Solo', 'Duo', 'Squad'];
export const TOURNAMENT_MAPS = ['Bermuda', 'Kalahari', 'Purgatory', 'Alpine', 'NeXTerra'];


export const INITIAL_GUILD_INFO: GuildInfo = {
    name: "FF MONSTER",
    id: "3023945535",
    joinLink: "https://ff.garena.com/guild/3023945535", 
    image: "https://picsum.photos/seed/guild-monster/1200/400",
    about: "Welcome to FF MONSTER! We are a competitive and friendly guild aiming for the top. We value teamwork, skill, and sportsmanship. Join us to participate in tournaments, custom rooms, and daily scrims.",
    rules: [
        "Active participation in guild wars is mandatory.",
        "Respect all members.",
        "Minimum rank requirement: Heroic.",
        "Discord is required for communication."
    ],
};

export const ROLES = Object.values(Role);

export const INITIAL_PLAYERS: Player[] = [
  {
    uid: ADMIN_UID,
    name: ADMIN_NAME,
    email: 'leader@ffmonster.com',
    role: Role.LEADER,
    profileScreenshot: 'https://picsum.photos/seed/leader/400',
    coverPhoto: 'https://picsum.photos/seed/leader-cover/800/300',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
    },
    bio: 'Leading FF MONSTER to victory! Passionate gamer, strategist, and proud leader of this amazing guild.',
    status: 'verified',
    permissions: {
      canVerifyMembers: true,
      canManageTournaments: true,
      canEditGuildProfile: true,
      canKickMembers: true,
    },
    badges: ['Guild Leader'],
  },
  {
    uid: '1234567890',
    name: 'Shadow Striker',
    email: 'acting@ffmonster.com',
    role: Role.ACTING_LEADER,
    profileScreenshot: 'https://picsum.photos/seed/acting/400',
    coverPhoto: 'https://picsum.photos/seed/acting-cover/800/300',
    socials: {},
    bio: 'Second in command, first in headshots.',
    status: 'verified',
    permissions: {
      canVerifyMembers: false,
      canManageTournaments: false,
      canEditGuildProfile: false,
      canKickMembers: false,
    },
    badges: ['Veteran'],
  },
  {
    uid: '0987654321',
    name: 'Viper',
    email: 'elder1@ffmonster.com',
    role: Role.ELDER,
    profileScreenshot: 'https://picsum.photos/seed/elder1/400',
    coverPhoto: 'https://picsum.photos/seed/elder1-cover/800/300',
    socials: {},
    bio: 'Veteran player, here to guide and dominate.',
    status: 'verified',
    permissions: {
      canVerifyMembers: false,
      canManageTournaments: false,
      canEditGuildProfile: false,
      canKickMembers: false,
    },
    badges: ['Veteran', 'Strategist'],
  },
];