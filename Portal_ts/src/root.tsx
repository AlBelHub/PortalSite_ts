import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./styles/root.scss";
import Announcement from "./components/Announcement";
import Topbar from "./components/Topbar";

export default function Root() {
  return (
    <>
      <Topbar />
      
      <div className="app-container">
        <div className="announcements">
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
        </div>

        <div className="app-container__items">
          <div className="sidebar b-radius">
            <Link to="/structure" className="sidebar__link">
              Структура
            </Link>
            <Link to="/science" className="sidebar__link">
              Наука
            </Link>
            <Link to="/orders" className="sidebar__link">
              Заявки
            </Link>
            <Link to="/businessTrip" className="sidebar__link">
              Командировки
            </Link>
            <Link to="/errands" className="sidebar__link">
              Поручения
            </Link>
            <Link to="/booking" className="sidebar__link">
              Бронирования
            </Link>
            <Link to="/library" className="sidebar__link">
              Библиотека
            </Link>
          </div>
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
