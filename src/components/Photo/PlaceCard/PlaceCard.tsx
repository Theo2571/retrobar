import React from 'react';
import {placeData} from "../../../types/types";
import styles from "./PlaceCard.module.scss"

const PlaceCard = ({data}: { data: placeData }) => {


    return (
        <div className={styles.place_card}>
            <img className={styles.place_card__image} alt="" src={data.photos[0]}/>
            <div className={styles.place_card__body}>
                <h4 className={styles.body_title}>
                    {data.placeName}
                    <span
                        className={styles.body_subtitle}>{data.eventName}</span>
                    {/*<span className={styles.body_studio_title}>{data.photographName}</span>*/}
                </h4>
                <div className={styles.body_actions}>
                    <span className={styles.body_actions__views}>{data.views}</span>
                    <span className={styles.body_actions__photos}>{data.photos.length}</span>
                    <span className={styles.body_actions__date}>{data.eventDate}</span>
                </div>
            </div>
        </div>)

};
export default PlaceCard;