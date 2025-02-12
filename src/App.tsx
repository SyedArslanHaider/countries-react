import "./App.css";
import CountriesLIst from "./CountriesList";
import CountriesAll from "./CountriesAll.json";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import SelectRegion from "./SelectRegion";
function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);
  const filteredCountries = CountriesAll.filter((country) => {
    // First, filter by region
    if (region && country.region !== region) return false;

    // Then, filter by name or capital
    const matchesName = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCapital =
      country.capital &&
      country.capital.toLowerCase().includes(search.toLowerCase());

    return matchesName || matchesCapital;
  });
  return (
    <>
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="container">
        <h1>REST Countries</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <SelectRegion region={region} setRegion={setRegion} />
        <CountriesLIst countryName={filteredCountries} />
      </div>
    </>
  );
}
export default App;
