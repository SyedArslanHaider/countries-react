// @ts-nocheck
import CountriesCard from "./CountriesCard";
import "./App.css";
function CountriesLIst({ countryName }) {
  return (
    <div className="countries-grid">
      {countryName.map((country) => (
        <CountriesCard key={country.name} country={country} />
      ))}
    </div>
  );
}
export default CountriesLIst;
