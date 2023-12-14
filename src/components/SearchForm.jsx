import icons from "../img/symbol-defs.svg";

function SearchForm() {
  return (
    <form className="main__search">
      <button type="submit" className="main__searchbtn">
        <svg className="main__svg">
          <use xlinkHref={`${icons}#icon-search-1`} />
        </svg>
      </button>

      <input
        className="main__input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        // onChange={handleChange}
        // value={value}
      />
    </form>
  );
}
export default SearchForm;
