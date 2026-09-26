import { fileURLToPath } from 'node:url';

const nextConfig = {
  devIndicators: false,
  // Pin the root so a stray lockfile higher up (e.g. in the home folder) isn't picked up.
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
};
export default nextConfig;
