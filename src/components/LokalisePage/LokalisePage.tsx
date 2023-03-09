import { useLocale } from "../../i18n/LocaleProvider";

const LokalisePage = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <h1>{formatMessage({ id: 'lokalise.createProject.title' })}</h1>
      <h2>{formatMessage({ id: 'lokalise.createProject.section1' })}</h2>
      <h2>{formatMessage({ id: 'lokalise.createProject.section2' })}</h2>
      <h2>{formatMessage({ id: 'lokalise.createProject.section3' })}</h2>
      <h1>{formatMessage({ id: 'lokalise.automation.title' })}</h1>
      <h2>{formatMessage({ id: 'lokalise.automation.section1' })}</h2>
      <h2>{formatMessage({ id: 'lokalise.automation.section1' })}</h2>
    </>
  );
};

export default LokalisePage;
