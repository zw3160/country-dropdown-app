import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Country, CountryRow } from '../types';
import './SelectTag.css';  // קובץ עיצוב מותאם אישית

const SelectTag: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [options, setOptions] = useState<CountryRow[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Country[]>('https://localhost:44327/api/countries/Asia')
      .then((response: any) => {
        setCountries(response.data);
      })
      .catch((error: any) => {
        console.error("Error fetching countries: ", error);
      });
  }, []);

useEffect(() => {
  const rows = countries.map(country => ({
    value: country.name,
    label: (
      <div className="country-option">
        <img
          src={country.flags.png}
          alt={country.name}
          className="country-flag"
        />
        {country.name} - {country.capital}
      </div>
    ),
  }));
setOptions(rows)
}, [countries])

  const handleSelectCountry = (e: CountryRow | null) => {
    const country = countries.find(c => c.name === e?.value);
    if (country) {
      navigate(`/${e?.value}`, { state: { country } });
    }
  };

  return (
    <div className="select-container">
      <h1>Select a Country</h1>
      <Select
        options={options}
        isSearchable
        placeholder="Select a country..."
        onChange={handleSelectCountry}
        className="country-select"
      />
    </div>
  );
};

export default SelectTag;