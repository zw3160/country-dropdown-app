import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useNavigate } from 'react-router-dom';
import { Country } from '../types';
import './SelectTag.css';  // קובץ עיצוב מותאם אישית

const SelectTag: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [location, setLocation] = useLocation();
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

  const handleSelectCountry = (selectedCountry?: string) => {
    const country = countries.find(c => c.name === selectedCountry);
    if (country) {
      setSelectedCountry(country);
      navigate(`/${selectedCountry}`, { state: { country } });
    }
  };

  const options = countries.map(country => ({
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

  return (
    <div className="select-container">
      <h1>Select a Country</h1>
      <Select
        options={options}
        isSearchable
        placeholder="Select a country..."
        onChange={(e) => handleSelectCountry(e?.value)}
        className="country-select"
      />
    </div>
  );
};

export default SelectTag;