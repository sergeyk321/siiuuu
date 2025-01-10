import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByName } from '../../services/apiService';
import './CountryDetail.css';

const CountryDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

      {/* Флаг с обработчиком клика */}
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flag"
        onClick={() => setIsModalOpen(true)}
      />

      <div className="country-info">
        <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
        <p><strong>Region:</strong> {country.region || 'N/A'}</p>
        <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ') || 'N/A'}</p>
      </div>
      <Link to="/" className="back-link">Back to Countries List</Link>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="modal-flag"
          />
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
