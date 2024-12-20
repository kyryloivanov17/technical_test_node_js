import NodeCache from 'node-cache';

// Create cash with TTL (time-to-live) 1 hour
let cache = new NodeCache({ stdTTL: 3600 });

export const setCustomCache = (customCache: NodeCache) => {
  cache = customCache;
};

export const getCache = (key: string) => {
  return cache.get(key);
};

export const setCache = (key: string, value: any) => {
  cache.set(key, value);
};

export const deleteCache = (key: string) => {
  cache.del(key);
};
