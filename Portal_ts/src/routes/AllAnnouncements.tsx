import React, { useState, useEffect } from "react";
import { ExampleAnouncementData } from "../tempdata/Announcements";
import { motion } from "framer-motion";
import "../styles/ann.scss";
import AllAnnouncementItem from "../components/AllAnnouncementItem";

const BASE_URL: string = "http://localhost:3000/AllAnnouncement";



export default function announcements() {
  const [ann, setAnn] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {

    console.log("EFFECT USING")
    async function fetchAPI() {
        setLoad(true);
        const responce = await fetch(BASE_URL);
        const json = await responce.json();
        setAnn(json);
        setLoad(false);
      }

    fetchAPI();
  }, []);

  if (load) {
    return (
      <>
        <h1>LOADING...</h1>
      </>
    );
  }

  return (
    <>
      <div className="ann">
        <div className="ann-filter__container"></div>
        <div className="ann-filter__buttons-container">
          <button className="ann_button">Сбросить фильтры</button>
          <button className="ann_button">Найти</button>
        </div>
        <div className="ann__list">
          {ann
            .slice()
            .reverse()
            .map((item) => (
              <AllAnnouncementItem
                key={item.id}
                id={item.id}
                header={item.header}
                content={item.content}
                timestamp={item.timestamp}
              />
            ))}
        </div>
      </div>
    </>
  );
}
