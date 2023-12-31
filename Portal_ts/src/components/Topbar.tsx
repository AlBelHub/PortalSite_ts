import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfileICON from "../assets/profile.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function Topbar() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="topbar__items">
        <div className="topbar__brand-container">
          <Link to="/" className="topbar__logo topbar__link"></Link>
          <Link to="/" className="toppbar__name topbar__link">
            НАЗВАНИЕ
          </Link>
        </div>
        <input className="search-bar b-radius border" placeholder="Поиск..." />
        {/* <div type="text" className="search-bar__icon"/> */}
        <div className="user-data">
          <div className="user-data__name">Алексей Михайлович</div>
          <div
            className="user-data__photo"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            {/* <img src={ProfileICON} alt="profile" /> */}
          </div>
          <AnimatePresence>
            {settingsOpen && (
              <motion.div className="user-data__settings b-radius"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              >
                <Link to="/" className="settings__link b-radius">
                  Профиль
                  <div className="img"></div>
                </Link>
                <Link to="/" className="settings__link b-radius">
                  Темная тема
                  <button
                    type="button"
                    className="dark-theme settings__button"
                  />
                </Link>
                <Link to="/auth" className="settings__link b-radius">
                  Выход
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
