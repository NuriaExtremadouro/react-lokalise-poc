import { useState } from "react";
import { useIntl } from "react-intl";

const IntlDemoPage = () => {
  const intl = useIntl();
  const [formattedNumber, setFormattedNumber] = useState('');
  const [pluralizationNumber, setPluralizationNumber] = useState('');

  return (
    <>
      <h1>{intl.formatMessage({ id: 'formatDate.title' })}</h1>
      <p>{intl.formatMessage({ id: 'formatDate.description1' })}</p>
      <p>
        {intl.formatDate(Date.now(), {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
      <p>{intl.formatMessage({ id: 'formatDate.description2' })}</p>
      <p>
        {intl.formatDate(Date.now(), {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
      <h1>{intl.formatMessage({ id: 'formatMessage.title' })}</h1>
      <p>{intl.formatMessage({ id: 'formatMessage.description1' })}</p>
      <button>{intl.formatMessage({ id: 'formatMessage.accept' })}</button>
      <button>{intl.formatMessage({ id: 'formatMessage.cancel' })}</button>
      <p>{intl.formatMessage({ id: 'formatMessage.description2' })}</p>
      <input value={formattedNumber} type='number' onChange={(e) => setFormattedNumber(e.target.value)} />
      <p>{intl.formatMessage({ id: 'formatMessage.parsedNumber' }, { n: formattedNumber })}</p>
      <p>{intl.formatMessage({ id: 'formatMessage.description3' })}</p>
      <h1>{intl.formatMessage({ id: 'formatPluralization.title' })}</h1>
      <p>{intl.formatMessage({ id: 'formatPluralization.description1' })}</p>
      <input value={pluralizationNumber} type='number' onChange={(e) => setPluralizationNumber(e.target.value)} />
      <p>{intl.formatMessage({ id: 'formatPluralization.pluralizationNumber' }, { n: pluralizationNumber })}</p>
    </>
  );
};

export default IntlDemoPage;
