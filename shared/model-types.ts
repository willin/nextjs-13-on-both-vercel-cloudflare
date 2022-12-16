/* eslint-disable no-unused-vars */
export enum ContentType {
  POST = 'post',
  PAGE = 'page',
  SNIPPET = 'snippet'
}

export enum ContentStatus {
  PUBLISHED = 'published',
  DFRAFT = 'draft',
  ARCHIVED = 'archived'
}

export enum InteractionType {
  RSS = 'rss',
  OTHER = 'other'
}

export type Interactions = {
  id: string;
  slug: string;
  likes: number;
  views: number;
  locale: string;
  type: ContentType | InteractionType;
  date_updated: string;
};

export type Tags = {
  id: string;
  slug: string;
  locale: string;
  name: string;
};

export type Contents = {
  id: string;
  slug: string;
  title: string;
  price: number;
  type: ContentType;
  locale: string;
  status: ContentStatus;
  body: string;
  wordcount: number;
  readtime: number;
  tags: { tags_id: Tags }[];
  date_created: string;
  date_updated: string;
};

export type Statistics = {
  online: boolean;
  coding: boolean;
  online_updated: string;
  date_updated: string;
  github: number;
  npm: number;
  wakatime: Record<string, string | number>[];
  programming: Record<string, string | number>[];
  contribution: Record<string, string | number>[];
};

export type DataTypes = {
  contents: Contents;
  interactions: Interactions;
  tags: Tags;
  statistics: Statistics;
};
