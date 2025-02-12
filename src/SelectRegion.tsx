interface SelectRegionProps {
  region: string;
  setRegion: (value: string) => void;
}

function SelectRegion({ region, setRegion }: SelectRegionProps) {
  return (
    <>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}
export default SelectRegion;
