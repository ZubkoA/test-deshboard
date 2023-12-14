import user from "../img/photo.jpg";

function Footer() {
  return (
    <div className="sidebar__footer">
      <img src={user} alt="User" />
      <div>
        <h4 className="sidebar__user">Evano</h4>
        <p className="sidebar__position">Project Manager</p>
      </div>
    </div>
  );
}

export default Footer;
