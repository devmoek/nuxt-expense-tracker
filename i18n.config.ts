export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      about: {
        title: "About Expensy - Your Personal Expense Tracker",
        content: "This is a sample Nuxt app.",
      },
    },
    ru: {
      about: {
        title: "О Expensy - ваш личный трекер расходов",
        content: "Это пример приложения Nuxt.",
      },
    },
  },
}));
