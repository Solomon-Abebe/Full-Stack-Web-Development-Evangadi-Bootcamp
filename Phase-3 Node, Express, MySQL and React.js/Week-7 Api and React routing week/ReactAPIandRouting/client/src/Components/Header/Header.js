import React from "react";
import logo from "../../commonResources/images/icons/logo-sm.png";
import search from "../../commonResources/images/icons/search-icon-sm.png";
import cart from "../../commonResources/images/icons/cart-sm.png";
import NavbarList from "./NavbarList";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* <div className="nav-wrapper fixed-top">
        <Container>
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div> */}
      <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
        <Container>
          <Nav>
            <Navbar
              className="w-100"
              collapseOnSelect
              expand="lg"
              variant="dark"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Link className="navbar-brand mx auto" to="/">
                <img src={logo} alt="apple" />
              </Link>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-justified w-100 nav-fill">
                  <NavbarList linkUrl="/mac/" linkName="Mac" />
                  <NavbarList linkUrl="/iphone/" linkName="Iphone" />
                  <NavbarList linkUrl="/ipad/" linkName="Ipad" />
                  <NavbarList linkUrl="/watch/" linkName="Watch" />
                  <NavbarList linkUrl="/tv/" linkName="Tv" />
                  <NavbarList linkUrl="/music/" linkName="Music" />
                  <NavbarList linkUrl="/support/" linkName="Support" />
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/search/">
                      <img src={search} alt="search" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/cart/">
                      <img src={cart} alt="cart" />
                    </Link>
                  </li>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Nav>
        </Container>
      </div>
    </div>
  );
}

export default Header;
