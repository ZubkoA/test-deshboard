import NameSection from "./NameSection";
import SearchForm from "./SearchForm";

function Header({ filter, setFilter }) {
  return (
    <div className="main__header">
      <NameSection />
      <SearchForm filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Header;
