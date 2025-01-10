// src/pages/Home/Home.tsx
import React, { useEffect, useState } from 'react';
import { getCountries } from '../../services/apiService';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [groupedCountries, setGroupedCountries] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();

      // Группировка стран по region
      const grouped = data.reduce((acc: Record<string, any[]>, country: any) => {
        const region = country.region || 'Unknown'; // Если region не указан, используем 'Unknown'
        if (!acc[region]) {
          acc[region] = [];
        }
        acc[region].push(country);
        return acc;
      }, {});

      // Сортировка стран внутри каждого региона по названию
      Object.keys(grouped).forEach((region) => {
        grouped[region] = grouped[region].sort((a: { name: { common: string; }; }, 
                                                b: { name: { common: string; }; }) =>
          a.name.common.localeCompare(b.name.common)
        );
      });

      setGroupedCountries(grouped);
    };

    fetchCountries();
  }, []);

  return (
    <div className="home">
      <h1>Countries List</h1>
      {Object.entries(groupedCountries).map(([region, countries]) => (
        <div key={region} className="region-group">
          <h2 className="region-title">{region}</h2>
          <div className="countries-grid">
            {countries.map((country) => (
              <div key={country.cca3} className="country-card">
                <Link to={`/country/${country.name.common}`} className="country-link">
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    className="country-flag"
                  />
                  <p className="country-name">{country.name.common}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
