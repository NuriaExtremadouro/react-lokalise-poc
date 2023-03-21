import { useState } from 'react';

import '../../App.css';
import { CaretDownIcon, InternationalizationIcon } from '../../assets/icons';
import { getLocaleLanguage } from '../../i18n/helpers';
import { Locales } from '../../i18n/enum';
import { useLocale } from '../../i18n/LocaleProvider';

const Menu: React.FC = () => {
  const { setLocale } = useLocale();

  const onLocaleSelected = (newLocale: Locales) => {
    setLocale(newLocale);
    setShowLanguageMenu(false);
  }

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <nav className='nav'>
      <div className='nav-element'>
        <h1>React Intl</h1>
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
  );
}

export default Menu;
