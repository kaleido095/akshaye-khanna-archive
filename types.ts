
export interface Film {
  year: string;
  title: string;
  role: string;
  notes?: string;
  ref?: string;
  category: 'Feature' | 'Cameo' | 'Music Video';
}

export interface Appearance {
  year: string;
  title: string;
  context: string;
  link?: string;
  isRecent?: boolean;
}

export interface Interview {
  type: 'Video' | 'Print' | 'Audio' | 'Article';
  title: string;
  date: string;
  summary: string;
  link?: string;
  sentiment?: 'Positive' | 'Negative' | 'Neutral';
}

export interface MusicVideo {
  year: string;
  title: string;
film?: string; // Optional: film the song is from
link: string;
}

export type FanContributionType = 'Fanart' | 'Appreciation Write-up' | 'Scene / Performance Analysis' | 'Edit / Reel';

export interface FanContribution {
  type: FanContributionType;
  title: string;
  creator: string;
  link?: string;
  description: string;
}

export type PostType = 'Discussion' | 'Question / Help' | 'Showcase' | 'Bug / Issue' | 'News / Update';
export type PostFlair = 'Prompt' | 'Model Update' | 'Workflow' | 'UI/UX' | 'Experiment' | 'General';

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string; // URL to avatar image
  body: string; // Markdown supported
  timestamp: number; // Unix timestamp
  likes: number;
  replies: Comment[];
  isOp?: boolean; // True if this comment is from the original poster
}

export interface CommunityPost {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  title: string;
  body: string; // Markdown supported
  type: PostType;
  flair: PostFlair;
  votes: number;
  // commentsCount: number; // Removed as it's derivable from comments.length
  timestamp: number; // Unix timestamp
  saved: boolean;
  imageUrl?: string;
  linkUrl?: string;
  codeBlock?: string;
  comments: Comment[];
}