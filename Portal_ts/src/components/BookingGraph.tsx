import React from "react";
import { useState } from "react";
import GraphOverlay from "./GraphOverlay";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  item: any;
  ElemWidth: number;
}

export default function BookingGraph({ item, ElemWidth }: Props) {
  const [hover, setHover] = useState(false);
  const elemWidthGranica = 30;

  let options = {
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <>
      <div className="odin" style={{ flexBasis: ElemWidth * item.time + "px" }}>
        <div className="time-cont">
          <p className="time">
            {item.event !== undefined && item.time > elemWidthGranica
              ? item.event.eventStartTime.toLocaleString("ru", options)
              : null}
          </p>
          <p className="time">
            {item.event !== undefined && item.time > elemWidthGranica
              ? item.event.eventEndTime.toLocaleString("ru", options)
              : null}
          </p>
        </div>
        <div
          className={item.isActive === true ? "active" : "inactive"}
          style={{ height: "1rem" }}
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          <AnimatePresence>
            {hover && (
              <motion.div
                className="info"
                animate={{
                  opacity: 1,
                  translateY: "10px",
                  zIndex: 999,
                }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                {item.event !== undefined ? (
                  <GraphOverlay eventData={item.event} />
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
