import React from 'react';
import PhotoSlider from "../../components/MainPage/PhotoSlider/PhotoSlider";
import Institution from "../../components/MainPage/Institution/Institution";
import BarSlider from "../../components/MainPage/BarSlider/BarSlider";
import OrderForPages from "../../components/ui/order-for-pages/OrderForPages";

const MainPage = () => {
    return (
        <div>
            <PhotoSlider />
            {/*<Institution />*/}
            {/*<BarSlider />*/}
            <OrderForPages />
        </div>
    );
};

export default MainPage;