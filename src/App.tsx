import "./App.css";
import CountriesLIst from "./CountriesList";
import CountriesAll from "./CountriesAll.json";
function App() {
  return (
    <div className="container">
      <h1>REST Countries</h1>
      <CountriesLIst countryName={CountriesAll} />
    </div>
  );
}

export default App;
