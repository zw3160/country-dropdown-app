import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Country } from '../types';
import './CountryDetails.css';  // קובץ עיצוב מותאם אישית

const CountryDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { country } = location.state as { country: Country } || {};

  return (
    country?
    <div className="country-details-container">
      <h2>{country.name}</h2>
      <img src={country.flags.png} alt={country.name} className="country-flag" />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <div className="currency-container">
        <strong>Currencies:</strong>
        {country.currencies.map((c) => (
          <div key={c.name} className="currency">{c.name}</div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Country Selection
      </button>
    </div> :
    <div className="country-details-container">
        No country selected
    </div>
  );
};

export default CountryDetails;