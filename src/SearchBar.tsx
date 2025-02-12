interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}
function SearchBar({ search, setSearch }: SearchBarProps) {
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
