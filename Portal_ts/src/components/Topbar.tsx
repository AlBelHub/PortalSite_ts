import React from "react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__items">
        <div className="topbar__brand-container">
          <div className="topbar__logo">1</div>
          <p className="toppbar__name">Название компании</p>
        </div>
        <div className="search-bar b-radius">
          1<div className="search-bar__icon">1</div>
        </div>
        <div className="user-data">
          <div className="user-data__name">userName</div>
          <div className="user-data__photo">1</div>
        </div>
      </div>
    </div>
  );
}
