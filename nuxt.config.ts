// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      maintenanceMode: process.env.MAINTENANCE_MODE === 'true',
      maintenanceMessage: process.env.MAINTENANCE_MESSAGE || "网站正在维护，请稍后再试",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "~/tailwind.config.js",
  },
  i18n: {
    langDir: "locales",
    locales: [
      {
        code: "ko",
        iso: "ko-KR",
        file: "ko.json",
        name: "한국어",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
      },
    ],
    defaultLocale: "ko",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  app: {
    head: {
      title: "SANIMOON",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "韩国经济研究院以自由市场经济理念为基础，综合研究韩国经济发展和创造良好企业制度环境的政策课题。",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
