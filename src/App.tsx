import "./App.css";
import CountriesLIst from "./CountriesList";
import CountriesAll from "./CountriesAll.json";
import SearchBar from "./SearchBar";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const filteredCountries = CountriesAll.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.capital.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <h1>REST Countries</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CountriesLIst countryName={filteredCountries} />
    </div>
  );
}
export default App;
