import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
        <li>
          <NavLink to="customers">Customers</NavLink>
        </li>
        <li>
          <NavLink to="income">Income</NavLink>
        </li>
        <li>
          <NavLink to="promote">Promote</NavLink>
        </li>
        <li>
          <NavLink to="help">Help</NavLink>
        </li>
      </ul>
    </nav>
  );
}
