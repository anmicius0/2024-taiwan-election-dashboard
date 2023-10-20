// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/i18n", "@nuxt/ui"],
  css: ["~/assets/css/main.scss"],
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
      { code: "en", name: "English", file: "en.json" },
      { code: "zh", name: "中文", file: "zh.json" },
    ],
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
