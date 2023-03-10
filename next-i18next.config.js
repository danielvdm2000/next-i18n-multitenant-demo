const languageNames = {
  'da': 'Dansk',
  'en': 'English',
  'it': 'Italiano',
  'de': 'Deutsch',
  'es': 'Español',
  'sv': 'Svenska',
  'no': 'Norsk',
  'fr': 'Français',
  'nl': 'Nederlands'
}

module.exports = {
  languageNames,
  i18n: {
    defaultLocale: 'en',
    locales: Object.keys(languageNames),
  },
}