type LanguageNames = {
    [key: string]: string;
}

type I18n = {
    defaultLocale: string;
    locales: string[];
}

export const languageNames: LanguageNames;
export const i18n: I18n;