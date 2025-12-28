
import { Post, SiteConfig } from '../types';
import { INITIAL_POSTS, INITIAL_CONFIG } from '../constants';

const STORAGE_KEY_POSTS = 'jjuni_studio_posts';
const STORAGE_KEY_CONFIG = 'jjuni_studio_config';

export const storageService = {
  getPosts: (): Post[] => {
    const data = localStorage.getItem(STORAGE_KEY_POSTS);
    if (!data) {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    return JSON.parse(data);
  },

  savePosts: (posts: Post[]) => {
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
  },

  getConfig: (): SiteConfig => {
    const data = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (!data) {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(INITIAL_CONFIG));
      return INITIAL_CONFIG;
    }
    return JSON.parse(data);
  },

  saveConfig: (config: SiteConfig) => {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
  }
};
