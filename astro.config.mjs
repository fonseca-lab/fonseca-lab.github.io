// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Organization site. The repo name matches <org>.github.io, so the site
// is served from the domain root and `base` stays unset.
export default defineConfig({
	site: 'https://fonseca-lab.github.io',
	trailingSlash: 'always',
});
