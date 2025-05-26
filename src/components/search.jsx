import './search.css';
import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
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
