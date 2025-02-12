import CountriesCard from "./CountriesCard";
import "./App.css";
interface Country {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number;
}
interface CountriesListProps {
  countryName: Country[];
}
function CountriesLIst({ countryName }: CountriesListProps) {
  return (
    <div className="countries-grid">
      {countryName.map((country) => (
        <CountriesCard key={country.name} country={country} darkMode={false} />
      ))}
    </div>
  );
}
export default CountriesLIst;
