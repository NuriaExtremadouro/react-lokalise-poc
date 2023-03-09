import { useState } from 'react';

import './App.css';
import { CaretDownIcon, InternationalizationIcon } from './assets/icons';
import IntlDemoPage from './components/IntlDemoPage/IntlDemoPage';
import LokalisePage from './components/LokalisePage/LokalisePage';
import { getLocaleLanguage } from './i18n/helpers';
import { Locales } from './i18n/enum';
import { LocaleProvider, useLocale } from './i18n/LocaleProvider';

const App = () => {
  const { setLocale } = useLocale();

  const onLocaleSelected = (newLocale: Locales) => {
    console.log('SELECTED LOCALE');
    console.log(newLocale);
    setLocale(newLocale);
  }

  const [page, setPage] = useState('lokalise');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <LocaleProvider>
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
                {Object.keys(Locales).map(key => (
                  <div onClick={() => onLocaleSelected(key as Locales)}>
                    <p>{`languages.${getLocaleLanguage(key as Locales)}`}</p>
                  </div>
                ))}
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
    </LocaleProvider>
  );
}

export default App;
