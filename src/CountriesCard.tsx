import "./App.css";
import { Link } from "react-router-dom";
interface Country {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number;
}

interface CountriesCardProps {
  country: Country;
  darkMode: boolean; // Receive the darkMode prop
}

function CountriesCard({ country, darkMode }: CountriesCardProps) {
  return (
    <Link to={`/country/${country.alpha2Code}`}>
      <div
        className={`country-card ${darkMode ? "lite-mode" : "dark-mode"}`} // Apply dark or light mode class
      >
        <img
          src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
          alt={`Flag of ${country.name}`}
          className="flag"
        />

        <div className="country-info">
          <h2>{country.name}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountriesCard;
