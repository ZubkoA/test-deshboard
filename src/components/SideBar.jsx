import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className="sidebar">
      {/* <Logo /> */}
      <AppNav />

      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc</p>
      </footer>
    </div>
  );
}

export default SideBar;
