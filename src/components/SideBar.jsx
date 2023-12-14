import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";

function SideBar() {
  return (
    <div className="sidebar">
      <Logo />
      <AppNav />
      <Footer />
    </div>
  );
}

export default SideBar;
