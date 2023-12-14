import icons from "../img/symbol-defs.svg";

function SearchForm({ filter, setFilter }) {
  return (
    <form className="main__search">
      <svg className="main__svg">
        <use xlinkHref={`${icons}#icon-search-1`} />
      </svg>

      <input
        className="main__input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
}
export default SearchForm;
