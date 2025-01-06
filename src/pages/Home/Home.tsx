// src/pages/Home/Home.tsx
import React, { useEffect, useState } from 'react';
import { getCountries } from '../../services/apiService';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="home">
      <h1>Countries List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/country/${country.name.common}`} className="country-link">
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
