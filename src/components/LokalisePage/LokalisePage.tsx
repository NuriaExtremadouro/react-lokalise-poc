import { useState } from "react";
import { useIntl } from "react-intl";

const LokalisePage = () => {
  const intl = useIntl();
  const [formattedNumber, setFormattedNumber] = useState('');
  const [pluralizationNumber, setPluralizationNumber] = useState('');

  return (
    <>
      <h1>Creating a Lokalise project</h1>
      <h2>Create project</h2>
      <h2>Connect to GitHub</h2>
      <h2>Utilities</h2>
      <h1>Automation with Lokalise</h1>
      <h2>Download - Lokalise to GitHub</h2>
      <h2>Upload - GitHub to Lokalise</h2>
    </>
  );
};

export default LokalisePage;
