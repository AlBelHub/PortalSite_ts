import React, {useState} from 'react'
import {ExampleAnouncementData} from "../tempdata/Announcements";
import {motion} from "framer-motion";
import '../styles/ann.scss';
import AllAnnouncementItem from '../components/AllAnnouncementItem';

export default function announcements() {

    const [announcements, setAnnouncements] = useState(ExampleAnouncementData);


    return(
        <>
        <div className="ann">
            <div className="ann-filter__container">
            </div>
            <div className="ann-filter__buttons-container">
                <button className="ann_button">Сбросить фильтры</button>
                <button className="ann_button">Найти</button>
            </div>
            <div className="ann__list">
                {
                    announcements.slice().reverse().map(item => (
                        <AllAnnouncementItem key={item.id} id={item.id} header={item.header} content={item.content} timestamp={item.timestamp}/>
                    ))
                }
            </div>
        </div>
        </>
    );
}