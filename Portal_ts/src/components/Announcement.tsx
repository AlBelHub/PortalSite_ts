import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  id: string;
  header: string;
  content: string;
  timestamp: Date;
}

export default function Announcement({
  id,
  header,
  content,
  timestamp,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Разобраться с ограничением количества текста */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="announcements__item announcements_m-p b-radius"
      >
        <h1>{header}</h1>
        <p>{content}</p>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="announcements__overlay b-radius"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <h1>{header}</h1>
            <p>{content}</p>
            <p>{timestamp.toLocaleDateString()}</p>
            <p>{id}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
