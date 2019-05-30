import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
function HeaderContent(){
    return (
        <div className="top-bar">
            <HeaderTitle />
            <div className="top-text">
                <p>@LambdaSchool </p>
                <p> - Jan 26</p>
            </div>
        </div>
    );
};

export default HeaderContent;
