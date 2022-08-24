import React from 'react';
import './ModalWindow.scss'
import {PlaceData} from "../../../types/types";

const ModalWindow = ({active , setActive, data}: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    data : PlaceData}) => {

    const closeModal = () => {
        setActive(false);
    }

    return (
        <div className={active ? "fade_block active" : "fade_block" }
             onClick={closeModal}>
            <div
                className="modal"
                onClick={e => e.stopPropagation()}>
                <div
                    className="modal_header">
                    <button className="modal_header__btn-close"
                        onClick={closeModal}></button>
                    <h4 className="modal_header__title">{data.placeName}</h4>
                    <span className="modal_header__subtitle">{data.eventName}</span>
                </div>
                <div
                    className="modal_body">

                </div>
                <div
                    className="modal_footer">
                    <div className="modal_footer_photos-amount">
                        <span className="">{1 + ' из ' + data.photos.length}</span>
                    </div>
                    <div className="modal_footer_btn-group">
                        <button className="modal_footer_btn-group__share">Поделиться</button>
                        <button className="modal_footer_btn-group__download">Скачать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;