// src/pages/CountryDetail/CountryDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByName } from '../../services/apiService';
import './CountryDetail.css';

const CountryDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountry = async () => {
      if (name) {
        const data = await getCountryByName(name);
        console.log('Country Data:', data); // Логируем данные для отладки
        setCountry(data);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>No data found for {name}</div>;
  }

  return (
    <div className="country-detail">
      <h1>{country.name.common}</h1>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flag"
      />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <Link to="/" className="back-link">Back to Countries List</Link>
    </div>
  );
};

export default CountryDetail;
