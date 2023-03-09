import { useState } from "react";
import { useLocale } from "../../i18n/LocaleProvider";

const IntlDemoPage = () => {
  const { formatMessage } = useLocale();
  const [formattedNumber, setFormattedNumber] = useState('');
  const [pluralizationNumber, setPluralizationNumber] = useState('');

  return (
    <>
      <h1>{formatMessage({ id: 'formatDate.title' })}</h1>
      <p>{formatMessage({ id: 'formatDate.description1' })}</p>
      {/* <p>
        {formatDate(Date.now(), {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p> */}
      <p>{formatMessage({ id: 'formatDate.description2' })}</p>
      {/* <p>
        {formatDate(Date.now(), {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p> */}
      <h1>{formatMessage({ id: 'formatMessage.title' })}</h1>
      <p>{formatMessage({ id: 'formatMessage.description1' })}</p>
      <button>{formatMessage({ id: 'formatMessage.accept' })}</button>
      <button>{formatMessage({ id: 'formatMessage.cancel' })}</button>
      <p>{formatMessage({ id: 'formatMessage.description2' })}</p>
      <input value={formattedNumber} type='number' onChange={(e) => setFormattedNumber(e.target.value)} />
      <p>{formatMessage({ id: 'formatMessage.parsedNumber' }, { n: formattedNumber })}</p>
      <p>{formatMessage({ id: 'formatMessage.description3' })}</p>
      <h1>{formatMessage({ id: 'formatPluralization.title' })}</h1>
      <p>{formatMessage({ id: 'formatPluralization.description1' })}</p>
      <input value={pluralizationNumber} type='number' onChange={(e) => setPluralizationNumber(e.target.value)} />
      <p>{formatMessage({ id: 'formatPluralization.pluralizationNumber' }, { n: pluralizationNumber })}</p>
    </>
  );
};

export default IntlDemoPage;
