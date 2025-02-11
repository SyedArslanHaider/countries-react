// @ts-nocheck
function SearchBar({ search, setSearch }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a country or capital"
        value={search}
        className="search-bar"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
export default SearchBar;
