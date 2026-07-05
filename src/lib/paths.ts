/**
 * Get the base path for the app (used for GitHub Pages)
 * In development: empty string
 * In production: '/Portfolio'
 */
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

/**
 * Helper to construct public asset paths with basePath prefix
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};
