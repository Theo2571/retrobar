import React from 'react';
import './PhotoGrid.scss';
import {placeData} from '../../../types/types';
import image from '../../../assets/PhotoPage/photo2.png';
import PlaceCard from "../PlaceCard/PlaceCard";


const PhotoGrid = () => {
    const data: placeData = {
        placeName: 'ZEPPELIN BAR',
        eventName: 'STREET CREDIBILITY',
        eventDate: '14 мая 2022',
        views: 6545,
        photographName: 'Фотостудия "Оригами"',
        photos: [image, image]
    }

    const places: placeData[] = [
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
    ]
    let classNameItem = "grid_item grid_item_"
    return (
        <div className="grid">
            {places.map((item, i) => (
                <div style={{color: '#fff'}}
                    className={classNameItem + (i+1)}
                >
                    <PlaceCard data={item}/>
                 </div>
            ))}
            <div className="grid_item grid_item_advertising_1">7</div>
            <div className="grid_item grid_item_advertising_2">13</div>
        </div>

    );
};

export default PhotoGrid;