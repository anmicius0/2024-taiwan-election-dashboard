// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" },

  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-quasar-ui",
  ],

  nitro: {
    compressPublicAssets: true,
  },

  app: {
    head: {
      titleTemplate: "%s | Allen Spring",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // @nuxtjs/google-fonts
  googleFonts: {
    families: {
      Oswald: [400, 500, 700],
    },
    display: "swap",
    base64: true,
  },

  // @vite-pwa/nuxt
  pwa: {
    manifest: {
      name: "Allen Spring's Blog",
      short_name: "AS. Blog",
      description: "Where the technology meet politics",
      start_url: "/",
      display: "fullscreen",
      prefer_related_applications: false,
      theme_color: "#64EF68",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },

  // nuxt-quasar-ui
  quasar: {
    config: {
      brand: {
        primary: "#64EF68",
      },
    },
  },

  compatibilityDate: "2024-10-17",
});
