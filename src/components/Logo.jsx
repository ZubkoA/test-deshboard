import logo from "../img/logo.png";

function Logo() {
  return (
    <div className="sidebar__logo">
      <img src={logo} alt="Dashboard logo" />
      <div className="sidebar__wrap">
        <h3>Dashboard</h3>
        <p>v.01</p>
      </div>
    </div>
  );
}

export default Logo;
