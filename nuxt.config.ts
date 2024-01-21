// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: [
    "@vite-pwa/nuxt",
    "@zadigetvoltaire/nuxt-gtm",
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
  hooks: {
    "build:before": async () => {
      const { exec } = require("child_process");
      exec(
        "node gcs.js",
        (error: Error | null, stdout: string, stderr: string) => {
          if (error) {
            console.error(`Error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);
        },
      );
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
  // @zadigetvoltaire/nuxt-gtm
  gtm: {
    id: process.env.GTAG,
    defer: false,
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: process.env.NODE_ENV === "development", // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    devtools: process.env.NODE_ENV === "development",
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
});
