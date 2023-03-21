import { createContext, FC, useCallback, useContext, useMemo, useRef, useState } from "react";
import { createIntl, createIntlCache, IntlFormatters, IntlShape, MessageDescriptor } from "react-intl";

import DefaultDictionary from './dictionaries/en-GB.json';
import { Countries, Currencies, Languages, Locales } from "./enum";
import { getAvailableLocales, getLocale, getLocaleMessages, getUserCountry, saveLocale } from "./helpers";

/**
 * Interface of our localization component state
 */
interface ILocaleContext extends Omit<IntlShape, 'formatMessage'> { // TODO: how does this Omit work?
  availableLanguages: Languages[];
  country: Countries;
  currency: Currencies;
  locale: Locales;
  setLocale: (args: Locales) => void;
  formatPrice: (number?: number | null) => string;
  formatMessage: (
    descriptor: MessageDescriptor & { id: keyof BaseDictionaryKeys },
    values?: Parameters<IntlFormatters['formatMessage']>[1],
    options?: Parameters<IntlFormatters['formatMessage']>[2],
  ) => ReturnType<IntlFormatters<string>['formatMessage']>;
}

type BaseDictionaryKeys = Record<keyof typeof DefaultDictionary, string>; // TODO: maybe there's a better place for this one

type LocaleProviderProps = {
  children: React.ReactNode;
  selectedRegion?: Locales;
}

// TODO: what do these do? Why export them from here and not inside the component as other methods?
export const LocaleContext = createContext<ILocaleContext>({} as ILocaleContext);
export const useLocale = () => useContext(LocaleContext);

/**
 * Component that wraps our app and provides localization in all of its pages.
 * @param param0 
 */
export const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  // Based on the country where the user accesses from, limit the available languages
  const userCountry: Locales = getUserCountry();
  const availableLanguages = getAvailableLocales(userCountry);

  // Based on the available languages and the user selection or default values, localize the app
  const cache = useRef(createIntlCache()); // TODO: what does this do?

  // Set the locale and translations
  const [{ messages, locale }, setMessagesAndLocale] = useState<{
    messages: Record<string, string>; // TODO: possibly turn this into a type
    locale: Locales;
  }>({
    messages: getLocaleMessages(getLocale()), // TODO: based on locale or default if none is found
    locale: getLocale(), // TODO: selection, or localStorage if it's in availableLocales, or browser if it's in availableLocales, or default from availableLocales
  });

  // Set the country
  const country = useMemo(
    () => Countries[userCountry],
    [userCountry],
  );

  // Set the currency
  const currency = useMemo( // TODO: why is this a memo? Because it won't change?
    () => Currencies[userCountry],
    [userCountry],
  );

  // Offer our own customized react-intl methods

  /**
   * Sets the locale and translations based on user selection
   */
  const setLocale = useCallback(async (selectedLocale: Locales) => {
    // Set the new selected locale and translations
    const messages = getLocaleMessages(selectedLocale); // TODO: wrap around try-catch and possibly need async for require JSON
    setMessagesAndLocale({
      locale: selectedLocale,
      messages,
    });

    // Save it for next time the user accesses the app
    saveLocale(selectedLocale);
  }, []);

  /**
   * Initializes our Intl object to have it available in all pages and also extend its methods as we see fit
   */
  const intl = useMemo(
    () => createIntl({ locale, messages }, cache.current), // TODO: when is this later used?
    [locale, messages],
  );

  /**
   * Implements the formatMessage method from react-intl
   * // TODO: the interface blocks this so the id is only accepted if it's in a dictionary. But why it complains about
   * types here and not in the DOP code?
   */
  const formatMessage = useCallback(
    (descriptor: any, values: any, options: any): string => intl.formatMessage(descriptor, values, options),
    [intl]
  );

  /**
   * Method to format prices using Intl's formatNumber
   * // TODO: we could format with two decimals. And we could have other methods for the different styles and options.
   */
  const formatPrice = useCallback(
    (value?: number | null) => {
      if (typeof value === 'number') {
        return intl.formatNumber(value, { style: 'currency', currency });
      }

      return '--';
    },
    [currency, intl],
  );

  // TODO: formatDate, etc. check the other methods.
  // TODO: It'd be cool to have some reimplemented instead of Intl's default while others being brand new like formatPrice

  const state = useMemo(
    () => ({
      ...intl,
      formatMessage,
      formatPrice,
      setLocale,
      availableLanguages,
      country,
      currency,
      locale,
    }),
    [availableLanguages, country, currency, intl, formatMessage, formatPrice, locale, setLocale],
  );

  return (<LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>);
};