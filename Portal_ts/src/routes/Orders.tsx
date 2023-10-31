import React from "react";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "../styles/orders.scss";
import { Link } from "react-router-dom";

export default function Orders() {
  //Вместо кликов использовать ID - надо API
  const [selected, setSelected] = useState<String>("");
  const [load, setLoad] = useState<Boolean>(false);
  const [orders, setOrders] = useState<Array<Orders>>([]);

  let statusArray = [
    "awaiting",
    "created",
    "progress",
    "completed",
    "deadline",
    "closed",
  ];

  const changeElementPosition = (arr, index1 = 0, index2 = 5) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
  };

  const sortByStatus = () => {
    setOrders(
      orders.slice(0).sort((a, b) => {
        return statusArray.indexOf(a.status) - statusArray.indexOf(b.status);
      })
    );
  };

  useEffect(() => {
    async function fetchAPI() {
      setLoad(true);
      const responce = await fetch("http://localhost:3000/AllOrders", {});
      const json = await responce.json();
      setOrders(json);
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
      <div className="orders-container">
        <div className="filters">
          <div className="filter__item">
            <button
              className="filter-tag"
              onClick={() => changeElementPosition(statusArray)}
            >
              Изменить позицию
            </button>
            <button
              className="filter-tag"
              onClick={() => sortByStatus()}
            >
              СОРТИРОВКА
            </button>
          </div>
        </div>
        <div className="order-header">
          <p className="order-header__text">Заявки</p>
          <p className="filter-tag">Земляной Вал</p>
        </div>

        <motion.div className="grid-container">
          {orders.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="order-item2 b-radius"
                onClick={() => setSelected(!selected)}
              >
                <motion.div className={"order-item2__header " + item.status}>
                  <motion.p className="order-date">Сегодня</motion.p>
                  <motion.p className="order-number">{item.id}</motion.p>
                </motion.div>
                <motion.div className="order-item2__content">
                  <motion.div className="order-item2__author">
                    <motion.p>
                      <Link to="orders">{item.author}</Link>
                    </motion.p>
                  </motion.div>
                  <motion.div className="order-item2__text">
                    <motion.p>{item.timestamp}</motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <h2>Today</h2>

        {/* <AnimatePresence>
          {selected && (
            <motion.div className="base" layoutId="test">
              <motion.h5>test</motion.h5>
              <motion.h2>test</motion.h2>
              <motion.button onClick={() => setSelected(!click)} />
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </>
  );
}
