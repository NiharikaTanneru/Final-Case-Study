import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavigationMenuButtons = () => {
  const arr = [
    {
      path: "/home",
      pathname: "home",
    },
    {
      path: "/contact",
      pathname: "contact_us",
    },
    {
      path: "/jobs",
      pathname: "jobs",
    },
  ];

  return (
    <div className="container">
      <Nav className="justify-content-end flex-grow-1 pe-2">
        {arr.map((item, i) => (
          <NavLink className="nav-link text-light" to={item.path} key={i}>
            <p className="btn btn-secondary text-uppercase">{item.pathname}</p>
          </NavLink>
        ))}
      </Nav>
    </div>
  );
};

export default NavigationMenuButtons;
