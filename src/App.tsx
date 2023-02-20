import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IntlProvider } from 'react-intl';
import IntlDemoPage from './components/IntlDemoPage/IntlDemoPage';
import { messages } from './i18n/translations';
import { Locales } from './i18n/locales';

const App = () => {
  const getLocale = () => ((localStorage.getItem("locale") || navigator.language) as Locales);

  const [locale, setLocale] = useState(getLocale());

  const onLocaleSelected = (newLocale: Locales) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  }

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={Locales.English}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Select language:</p>
          <select defaultValue={locale} onChange={(e) => onLocaleSelected(e.target.value as Locales)}>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
          </select>
          <IntlDemoPage />
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
