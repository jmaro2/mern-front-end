import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";


//stateless functional component
const NavBar = () => {
  // return (
  //   <nav className="navbar navbar-light bg-light">
  //     <a href="#" className="navbar-brand m-2">Navbar{" "} <span className="btn btn-secondary">{totalCounters}</span></a>
  //   </nav>
  // );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Archon</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                  Create
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul> */}
              <Dropdown>
                <Dropdown.Toggle variant="danger">
                  Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    Home Page
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}


 
export default NavBar;