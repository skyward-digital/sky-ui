import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// import partytown from '@astrojs/partytown'
// import prefetch from "@astrojs/prefetch";
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    // partytown(),
    // prefetch(),
    sitemap(),
  ],
})
