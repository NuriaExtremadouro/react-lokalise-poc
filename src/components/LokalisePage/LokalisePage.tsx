import { useIntl } from "react-intl";

const LokalisePage = () => {
  const intl = useIntl();

  return (
    <>
      <h1>{intl.formatMessage({ id: 'lokalise.createProject.title' })}</h1>
      <h2>{intl.formatMessage({ id: 'lokalise.createProject.section1' })}</h2>
      <h2>{intl.formatMessage({ id: 'lokalise.createProject.section2' })}</h2>
      <h2>{intl.formatMessage({ id: 'lokalise.createProject.section3' })}</h2>
      <h1>{intl.formatMessage({ id: 'lokalise.automation.title' })}</h1>
      <h2>{intl.formatMessage({ id: 'lokalise.automation.section1' })}</h2>
      <h2>{intl.formatMessage({ id: 'lokalise.automation.section1' })}</h2>
    </>
  );
};

export default LokalisePage;
