import { Countries, Currencies, Languages, Locales } from "./enum";

/**
 * Gets the country from which the user is accessing. Ideally, we would have something like user
 * data or geolocation for this. Here I'm just picking the locale from the browser for a demo.
 */
export const getUserCountry = () => Countries[navigator.language as Locales];

/**
 * Gets the locales available for selection based on the country where the user is accessing.
 */
export const getAvailableLocales = (country: Countries) => {
  switch (country) { // TODO: add more languages and dialects to showcase
    case Countries['de-DE']:
      return [Languages['de-DE']];
    case Countries['en-GB']:
      return [Languages['en-GB']];
    case Countries['es-ES']:
      return [Languages['es-ES']];
    case Countries['fr-FR']:
      return [Languages['fr-FR']];
    default:
      return [Languages['en-GB']];
  }
};

/**
 * Gets the locale that was previously selected by the user or defaults to the browser's locale.
 */
export const getLocale = () => (localStorage.getItem('locale') || navigator.language) as Locales;

/**
 * Stores the selected locale in the localStorage to recover it when the user revisits the page.
 */
export const saveLocale = (language: Locales) => localStorage.setItem('locale', language);

/**
 * Gets the country for the given locale.
 */
export const getLocaleCountry = (locale: Locales) => Countries[locale];

/**
 * Gets the currency for the given locale.
 */
export const getLocaleCurrency = (locale: Locales) => Currencies[locale];

/**
 * Gets the language for the given locale.
 */
export const getLocaleLanguage = (locale: Locales) => Languages[locale];

/**
 * Gets the right dictionary based on the language selected.
 */
export const getLocaleMessages = (language: Locales) => require(`./dictionaries/${language}.json`);
