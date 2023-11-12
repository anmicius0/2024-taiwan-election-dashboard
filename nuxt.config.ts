// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/i18n", "@nuxt/ui"],
  buildModules: [
    // if you are using nuxt < 2.9.0, use modules property instead.
    "nuxt-purgecss",
    "@nuxtjs/pwa",
  ],
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      titleTemplate: "%s | Allen Spring",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
  googleFonts: {
    families: {
      "Noto+Serif+TC": [400, 500, 700],
    },
    display: "swap",
    download: true,
    base64: true,
  },
  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en", file: "en.json" },
      { code: "zh", name: "中文", iso: "zh", file: "zh.json" },
    ],
    baseUrl: "tps://2024-tw-presidential.vercel.app/",
    defaultLocale: "en",
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
    },
  },
  ui: {
    global: true,
  },
  colorMode: {
    preference: "light",
  },
  pwa: {},
});
