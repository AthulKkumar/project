import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import navigationConstants from "../../constants/navigation.constant";
import gift from "../../assets/svg/gift.svg";
import settings from "../../assets/svg/settings.svg";
import help from "../../assets/svg/help.svg";
import styles from "./navigation.module.css";

const NavigationLayout = () => {
  const path = useLocation();
  return (
    <div className="d-flex ">
      <nav
        className="d-flex flex-column justify-content-around align-items-start min-vh-100 p-3 "
        style={{ background: "rgba(251, 251, 251, 1)" }}
      >
        <section>
          <ul
            className="d-flex flex-column gap-3"
            style={{ color: "rgba(143, 143, 143, 1)" }}
          >
            {navigationConstants.map((item, index) => {
              return (
                <li
                  className={`d-flex  p-2 gap-3 rounded ${
                    path.pathname == item.path ? styles.activeLink : ""
                  }`}
                  key={index}
                >
                  <img
                    src={
                      path.pathname == item.path ? item.activeIcon : item.icon
                    }
                    alt={item.name}
                    srcset=""
                  />

                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="d-flex flex-column bg-white p-3">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <img src={gift} alt="" srcset="" />
            <p className="fw-semibold">Free Gifts awaits You!</p>
          </div>
          <Link>Explore More Fetures</Link>
        </section>
        <section>
          <ul className="d-flex flex-column gap-3">
            <li className="d-flex gap-3">
              <img src={help} alt="help" srcset="" />
              <a href="/register">Help</a>
            </li>
            <li className="d-flex gap-3">
              <img src={settings} alt="settings" srcset="" />
              <a href="/">Settings</a>
            </li>
          </ul>
        </section>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayout;
