import React from "react";
import { useState } from "react";

import {motion, AnimatePresence} from "framer-motion";

import "../styles/orders.scss";

export default function Orders() {

  //Вместо кликов использовать ID - надо API
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="orders-container">
        <div className="filters">
          <div className="filter__item"></div>
        </div>
        <div className="order-header">
          <p className="order-header__text">Заявки</p>
          <p className="filter-tag">Земляной Вал</p>
        </div>

        <motion.div className="order-items2">
          <motion.div className="flex-container">
            <motion.div className="order-item2 b-radius" layoutId="test" onClick={() => setClick(!click)}>
              <motion.div className="order-item2__header">
                <motion.p className="order-date">Сегодня</motion.p>
                <motion.p className="order-number">№-0345</motion.p>
              </motion.div>
              <motion.div className="order-item2__content">
                <motion.div className="order-item2__author">
                  <motion.p>Борзенков Г.А.</motion.p>
                </motion.div>
                <motion.div className="order-item2__text">
                  <motion.p>
                    Отломалась ножка стула, всё перебробовал, ничего не
                    получил...
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <h2>Today</h2>


        <AnimatePresence>
{
  click && (
    <motion.div className="base" layoutId="test">
    <motion.h5>test</motion.h5>
    <motion.h2>test</motion.h2>
    <motion.button onClick={() => setClick(!click)} />
  </motion.div>
  )
}
</AnimatePresence>



      </div>
    </>
  );
}
