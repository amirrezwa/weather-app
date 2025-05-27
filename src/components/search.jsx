import { useState } from 'react';
import './search.css';

function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="...نام شهر را وارد کنید"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">جستجو</button>
    </form>
  );
}

export default Search;