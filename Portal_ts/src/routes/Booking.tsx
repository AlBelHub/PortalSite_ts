import React, { useCallback, useState } from "react";
import { useEffect, useRef } from "react";

import { ExampleBookingData } from "../tempdata/Booking";
import "../styles/booking.scss";
import BookingGraph from "../components/BookingGraph";

// Значение key не уникальное!

function makeDiagram(events: Array<any>): Array<Object> {
  // Сортируем события по времени начала
  const sortedByTime = events.sort(
    (ev1, ev2) => ev1.eventStartTime - ev2.eventStartTime
  );
  const arrDiv = [];
  const msToMinutes = 60000; // 1 минута в миллисекундах

  for (let i = 0; i < sortedByTime.length; i++) {
    const event = sortedByTime[i];
    const eventStart = event.eventStartTime;
    const eventEnd = event.eventEndTime;

    // Длительность события в минутах
    const eventDuration = (eventEnd - eventStart) / msToMinutes;

    // Добавляем активное событие
    arrDiv.push({ time: eventDuration, isActive: true });

    if (i === 0 && eventStart.getHours() > 9) {
      // Если это первое событие и начинается позже 9:00, то считаем время до первой брони
      const timeUntilFirstEvent =
        (eventStart -
          new Date(
            eventStart.getFullYear(),
            eventStart.getMonth(),
            eventStart.getDate(),
            9,
            0
          )) /
        msToMinutes;
      arrDiv.unshift({ time: timeUntilFirstEvent, isActive: false });
    }

    if (i < sortedByTime.length - 1) {
      // Время до следующего события в минутах
      const timeUntilNextEvent =
        (sortedByTime[i + 1].eventStartTime - eventEnd) / msToMinutes;
      arrDiv.push({ time: timeUntilNextEvent, isActive: false });
    } else if (eventEnd.getHours() < 18) {
      // Если это последнее событие и заканчивается до 18:00, то добавляем время до 18:00
      const timeUntilEndOfDay =
        (new Date(
          eventEnd.getFullYear(),
          eventEnd.getMonth(),
          eventEnd.getDate(),
          18,
          0
        ) -
          eventEnd) /
        msToMinutes;
      arrDiv.push({ time: timeUntilEndOfDay, isActive: false });
    }
  }
  return arrDiv;
}

export default function Booking() {
  const targetElemWidth: React.RefObject<HTMLDivElement> = useRef();
  const ElemWidth = targetElemWidth.current?.offsetWidth / 108;

  return (
    <>
      <div className="booking-cont">
        {ExampleBookingData.map((item) => {
          return (
            <>
              <div key={item.territory} className="terr-container">
                <div className="terr-name">{item.territory}</div>
                {item.cabinets.map((cab) => {
                  return (
                    <div key={cab.cabinet} className="cabinet">
                      <div className="cabinet__container">
                        <p className="cabinet__name">{cab.cabinet}</p>
                        <button className="tag-button">Забронировать</button>
                        <button className="tag-button">Посмотреть всё</button>
                      </div>

                      <div className="eventsTEMP" ref={targetElemWidth}>
                        {makeDiagram(cab.events).map((item) => (
                          <BookingGraph item={item} ElemWidth={ElemWidth} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
