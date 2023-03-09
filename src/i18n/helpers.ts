import { Countries, Currencies, Languages, Locales } from "./enum";

/**
 * Gets the country from which the user is accessing based on the IP. We could also use other
 * sources such as the URL or the user data.
 * 
 * Note: the API I'm calling in this method returns much more than the country (languages, locale,
 * currency, etc.) in case we wanted to go directly with that instead of implementing our own
 * handlers.
 */
export const getCountryFromIp = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    console.log(response); // TODO: check format
    return response;
  } catch (error) {
    console.log({ error }, 'Error getting country from URL. Defaulting to EN.');
    return Locales['en-GB'];
  }
};

/**
 * Gets the locales available for selection based on the country where the user is accessing.
 */
export const getAvailableLocales = (country: Locales) => {
  switch (country) { // TODO: add more languages and dialects to showcase
    case Locales['de-DE']:
      return [Locales['de-DE']];
    case Locales['en-GB']:
      return [Locales['en-GB']];
    case Locales['es-ES']:
      return [Locales['es-ES']];
    case Locales['fr-FR']:
      return [Locales['fr-FR']];
    default:
      return [Locales['en-GB']];
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
