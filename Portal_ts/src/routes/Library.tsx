import React from "react";
import "../styles/library.scss";
import BookTable from "../components/BookTable";

export default function Library() {
  return (
    <>
      <div className="library-container">
        <div className="menu">
          <div className="menu__items">
            <div className="card">
              <img src="" alt="" />
              Книги
            </div>
            <div className="card">
              <img src="" alt="" />
              Фирменный стиль
            </div>
            <div className="card">
              <img src="" alt="" />
              СМР
            </div>
          </div>
          <BookTable />
        </div>
      </div>
    </>
  );
}
