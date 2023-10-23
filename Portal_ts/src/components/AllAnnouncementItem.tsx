import React, { SyntheticEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  id: string;
  header: string;
  content: string;
  timestamp: Date;
}

export default function AllAnnouncementItem({
  id,
  header,
  content,
  timestamp,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        key={id}
        whileHover={{ scale: 1.03 }}
        onClick={(e) => handleClick(e)}
      >
        {/* <div className="ann__picture"></div> */}
        <div className="ann__content">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="announcements__overlay_back"
          >
            <motion.div
              className="announcements__overlay b-radius"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
                <button onClick={(e) => handleClick(e)}>Закрыть</button>
              <h1>{header}</h1>
              <p>{content}</p>
              <p>{timestamp.toLocaleDateString()}</p>
              <p>{id}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
