import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import './App.css';
import { CaretDownIcon, InternationalizationIcon } from './assets/icons';
import IntlDemoPage from './components/IntlDemoPage/IntlDemoPage';
import LokalisePage from './components/LokalisePage/LokalisePage';
import { messages } from './i18n/translations';
import { Locales } from './i18n/locales';

const App = () => {
  const getLocale = () => ((localStorage.getItem("locale") || navigator.language) as Locales);

  const [locale, setLocale] = useState(getLocale());
  const [page, setPage] = useState('lokalise');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const onLocaleSelected = (newLocale: Locales) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  }

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={Locales.English}>
      <div className="main">
        <nav className='nav'>
          <div className={`nav-element ${page === 'intl' && ' selected'}`} onClick={() => setPage('intl')}>
            <h1>React Intl</h1>
          </div>
          <div className='nav-separator' />
          <div className={`nav-element ${page === 'lokalise' && ' selected'}`} onClick={() => setPage('lokalise')}>
            <h1>Lokalise</h1>
          </div>
          <div className='nav-separator' />
          <div className={`nav-element ${page === 'circleci' && ' selected'}`} onClick={() => setPage('circleci')}>
            <h1>CircleCI</h1>
          </div>
          <div className='language-button' onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
            <CaretDownIcon className='caret-icon' />
            <InternationalizationIcon />
          </div>
          {
            showLanguageMenu && (
              <div className='language-dropdown'>
                <div onClick={() => onLocaleSelected('en' as Locales)}>
                  <p>English</p>
                </div>
                <div onClick={() => onLocaleSelected('es' as Locales)}>
                  <p>Spanish</p>
                </div>
              </div>
            )
          }
        </nav>
        <header className="content">
          {page === 'intl' && <IntlDemoPage />}
          {page === 'lokalise' && <LokalisePage />}
          {page === 'circleci' && <p>CircleCI page</p>}
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
