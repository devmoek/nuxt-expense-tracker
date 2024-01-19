import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    "nuxt-simple-sitemap",
    "@nuxtjs/color-mode",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      darkMode: "class",
    },
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    baseUrl: "https://expensy.vercel.app",
    defaultLocale: "en",
    langDir: "lang",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
        name: "English",
      },
      {
        code: "es",
        iso: "es-ES",
        file: "es-ES.json",
        name: "Español",
        isCatchallLocale: true,
      },
    ],
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: [
        "/index",
        "/",
        "/about",
        "/es/about",
        "/ru/about",
        "/ru",
        "/es",
      ],
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: true,
    },
  },
});
