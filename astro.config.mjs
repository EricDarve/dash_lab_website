// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Deployed to GitHub Pages at https://ericdarve.github.io/dash_lab_website/.
// If the site moves to a custom domain, update `site` and drop `base`.
export default defineConfig({
  site: "https://ericdarve.github.io",
  base: "/dash_lab_website",
  // GitHub Pages 301-redirects /foo to /foo/, so emit and require
  // trailing slashes to skip that round trip on every navigation.
  trailingSlash: "always",
  // Hover-prefetch internal links: subpages are ~2 KB gzipped, so the
  // page is fully cached before the click lands.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
