// src/services/apiService.ts
export const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Error fetching countries');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error('Error fetching country details');
    }
    const data = await response.json();
    return data[0]; // API возвращает массив, мы берем первый элемент
  } catch (error) {
    console.error('Error fetching country details:', error);
    return null;
  }
};
