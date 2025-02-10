import "./App.css";
function CountriesCard({ country }) {
  return (
    <div className="country-card">
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
  );
}
export default CountriesCard;
