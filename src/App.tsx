import './App.css';
import IntlDemoPage from './components/IntlDemoPage/IntlDemoPage';
import { LocaleProvider } from './i18n/LocaleProvider';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <LocaleProvider>
      <div className="main">
        <Menu />
        <header className="content">
          <IntlDemoPage />
        </header>
      </div>
    </LocaleProvider>
  );
}

export default App;
