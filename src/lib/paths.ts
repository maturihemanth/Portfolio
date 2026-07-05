/**
 * For static export on GitHub Pages, we always need the basePath prefix
 * This ensures images/videos load from /Portfolio/ subpath
 */
export const BASE_PATH = '/Portfolio';

/**
 * Helper to construct public asset paths with basePath prefix
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};
