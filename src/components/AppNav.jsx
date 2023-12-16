import { NavLink } from "react-router-dom";
import icons from "../img/symbol-defs.svg";

export default function AppNav() {
  return (
    <nav className="sidebar__navwrap">
      <ul className="sidebar__ul">
        <li>
          <NavLink to="product" className="sidebar__nav">
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-key-square`} />
            </svg>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to="product" className="sidebar__nav">
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-d-square-1`} />
            </svg>
            <span>Product</span>
            <svg className="sidebar__svgright">
              <use xlinkHref={`${icons}#icon-chevron-right-2`} />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to="customers" className="sidebar__nav">
            {" "}
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-user-square-1`} />
            </svg>
            Customers<span></span>{" "}
            <svg className="sidebar__svgright">
              <use xlinkHref={`${icons}#icon-chevron-right-2`} />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to="income" className="sidebar__nav">
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-wallet-money-2`} />
            </svg>
            <span>Income</span>
            <svg className="sidebar__svgright">
              <use xlinkHref={`${icons}#icon-chevron-right-2`} />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to="promote" className="sidebar__nav">
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-discount-shape-1`} />
            </svg>
            <span>Promote</span>
            <svg className="sidebar__svgright">
              <use xlinkHref={`${icons}#icon-chevron-right-2`} />
            </svg>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to="help" className="sidebar__nav">
            <svg className="sidebar__svg">
              <use xlinkHref={`${icons}#icon-message-question-1`} />
            </svg>
            <span>Help</span>
            <svg className="sidebar__svgright">
              <use xlinkHref={`${icons}#icon-chevron-right-2`} />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
