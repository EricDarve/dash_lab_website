// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Deploy targets (see README "Deployment"):
// - GitHub Pages (default): https://ericdarve.github.io/dash_lab_website/
// - Stanford web hosting: override per target, e.g.
//   SITE=https://web.stanford.edu BASE=/group/dashlab npm run build
//   then copy dist/ into the group's AFS WWW directory.
export default defineConfig({
  site: process.env.SITE ?? "https://ericdarve.github.io",
  base: process.env.BASE ?? "/dash_lab_website",
  // GitHub Pages 301-redirects /foo to /foo/, so emit and require
  // trailing slashes to skip that round trip on every navigation.
  trailingSlash: "always",
  // Hover-prefetch internal links: subpages are ~2 KB gzipped, so the
  // page is fully cached before the click lands.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
