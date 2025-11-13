export enum Role {
  LEADER = 'Leader',
  ACTING_LEADER = 'Acting Guild Leader',
  ELDER = 'Elder',
  MEMBER = 'Member',
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  gmail?: string;
  x?: string;
  discord?: string;
  telegram?: string;
  tiktok?: string;
  whatsapp?: string;
}

export interface PlayerPermissions {
  canVerifyMembers: boolean;
  canManageTournaments: boolean;
  canEditGuildProfile: boolean;
  canKickMembers: boolean;
}

export interface Player {
  uid: string;
  name: string;
  email: string; // Added for auth
  role: Role;
  profileScreenshot: string | null;
  coverPhoto: string | null;
  socials: SocialLinks;
  bio?: string;
  status: 'verified' | 'pending'; // Changed from verified
  permissions: PlayerPermissions; // Added permissions
  badges?: string[]; // Added for member recognition
}

export interface TournamentParticipant {
  playerId: string;
  whatsapp: string;
  gmail: string;
  status: 'pending' | 'approved';
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  description: string;
  participants: TournamentParticipant[];
  type: 'BR' | 'CS' | 'Other';
  map: string;
  mode: 'Solo' | 'Duo' | 'Squad';
  maxPlayers: number;
}


export interface GuildInfo {
    name: string;
    id: string;
    joinLink: string;
    image: string;
    about: string;
    rules: string[];
}