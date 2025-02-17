import { useParams } from "react-router";
import CountriesAll from "./CountriesAll.json";
import "./CountryDetails.css";
import { Link } from "react-router-dom";
function CountriesDetails() {
  const { alpha2Code } = useParams<{ alpha2Code: string }>();
  const country = CountriesAll.find((c) => c.alpha2Code === alpha2Code);
  if (!country) {
    return <h2>Country not found!</h2>;
  }
  return (
    <div className="country-detail">
      <h1>Country Detail</h1>
      <img
        src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
        alt={`Flag of ${country.name}`}
        className="flag"
      />
      <h1>{country.name}</h1>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Native-Name : </strong>
        {country.nativeName}
      </p>
      <p>
        <strong>Calling-Code : </strong>
        {country.callingCodes}
      </p>
      <p>
        <strong>Area : </strong>
        {country.area + " sq.km"}
      </p>
      <p>
        <strong>Border : </strong>
        {country.borders && country.borders.length > 0 ? (
          country.borders.map((b, index) => <p key={index}>{b}</p>)
        ) : (
          <span>No border Found</span>
        )}
      </p>
      <br />
      <Link to={"/"}>back to home</Link>
    </div>
  );
}
export default CountriesDetails;
