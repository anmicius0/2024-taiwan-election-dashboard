// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/i18n", "@nuxt/ui"],
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      titleTemplate: "%s | Allen Spring",
      meta: [
        // Each object in this array is its own meta tag
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Meta description",
        },
      ],
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
  runtimeConfig: {
    public: {},
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
});
