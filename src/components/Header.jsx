import NameSection from "./NameSection";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <div className="main__header">
      <NameSection />
      <SearchForm />
    </div>
  );
}

export default Header;
