import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import CardContent from '../CardComponents/CardContent';
import CardBanner from '../CardComponents/CardBanner';
function CardContainer(){
    return(
        <div className="contain">
            <div className="icon">
                <ImageThumbnail /> 
            </div>
            <div className="mainColumn">
                <HeaderContainer />
                <CardContent /> 
                <CardBanner />
            </div>
        </div>
    );
};

export default CardContainer;
