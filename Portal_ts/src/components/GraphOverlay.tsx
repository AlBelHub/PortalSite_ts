import React from "react";
import { Link } from "react-router-dom";

interface Props {
  eventData: any;
}

export default function GraphOverlay({ eventData }: Props) {

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    } 


  return (
    <div className="ev-over">
      <h2 className="ev-over__ev-name">{eventData.eventName}</h2>
      <div className="info">
        <p className="info__text">Автор: <Link to='/'>{eventData.creator}</Link></p>
        <p className="info__text">Кол-во участников: {eventData.participants}</p>
        <p className="info__text">Начало: {eventData.eventStartTime.toLocaleString("ru", options)}</p>
        <p className="info__text">Конец: {eventData.eventEndTime.toLocaleString("ru", options)}</p>
        <div className="info__services">
          <p className="info__text">Питание</p>
          <div className="info__tag" style={{backgroundColor: eventData.foodService == true ? "#16A085" : "#FF4444"}}>{eventData.foodService == true ? "Да" : "Нет"}</div>
          <p className="info__text">Гардероб</p>
          <div className="info__tag" style={{backgroundColor: eventData.wardrobeService == true ? "#16A085" : "#FF4444"}}>{eventData.wardrobeService == true ? "Да" : "Нет"}</div>
          <p className="info__text">Таблички</p>
          <div className="info__tag" style={{backgroundColor: eventData.tableWithName == true ? "#16A085" : "#FF4444"}}>{eventData.tableWithName == true ? "Да" : "Нет"}</div>
        </div>
      </div>
    </div>
  );
}
