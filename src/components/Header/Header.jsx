import React, { useRef } from "react";
import logo from "../../assets/all-images/logoe.jpg";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartAction } from "../../store/Shopping-cart-slice";
import Panier from "../UI/Panier";
import Profile from "../UI/Profile";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/service",
    display: "Service",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const CarLength = useSelector((state) => state.shoppingCart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Besoin d'aide?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +225 01 41 89 86 59 / 07 77 05 23 17
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {token ? (
                  <>
                    <span>Bienvenue, {user?.prenom}</span>
                    {user?.photoPath && (
                      <img
                        src={`http://localhost:8080/uploads/${user.photoPath}`}
                        alt="User"
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                      />
                    )}
                    <Profile />
                  </>
                ) : (
                  <>
                    <Link to="/login" className="d-flex align-items-center gap-1">
                      <i className="ri-login-circle-line"></i> Connexion
                    </Link>
                    <Link to="/inscription" className="d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> Inscription
                    </Link>
                  </>
                )}
                <Panier />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="" />
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Côte d'Ivoire</h4>
                  <h6>Bingerville, Abidjan</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>24/24</h4>
                  <h6>6h - 19h</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> appel
                </Link>
              </button>
              </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Service en traitement, problème technique" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
