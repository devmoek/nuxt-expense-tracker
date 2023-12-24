import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
});