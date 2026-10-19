export type IslandGroup = 'luzon' | 'visayas' | 'mindanao';

export interface Attraction {
  id: string;
  name: string;
  description: string;
  visitorTips?: string;
  tag?: string;
  iconName?: string;
}

export interface Activity {
  title: string;
  description: string;
}

export interface Festival {
  name: string;
  subtitle: string;
  description: string;
  timingNote: string;
}

export interface LocalFood {
  name: string;
  tagline: string;
  description: string;
}

export interface ReferenceItem {
  id: string;
  authors?: string;
  year?: string;
  title: string;
  publisherOrSource: string;
  url: string;
  claimSupported: string;
}

export interface DestinationStory {
  id: string;
  slug: string;
  region: IslandGroup;
  regionName: string;
  locationName: string;
  articleTitle: string;
  subtitle: string;
  heroImage: string;
  leadKicker: string;
  introduction: string[];
  attractions: Attraction[];
  activities: Activity[];
  festivals: Festival[];
  foods: LocalFood[];
  tourismSignificance: {
    points: { title: string; desc: string }[];
    responsibleTourism: string;
  };
  rrl: {
    summary: string;
    points: string[];
    sourceIds: string[];
  };
  conclusion: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLeader?: boolean;
  description: string;
}
