import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
function HeaderContainer(){
return(
    <div>
        <ImageThumbnail />
        <HeaderContent />
        <HeaderTitle />
    </div>
);
}

export default HeaderContainer;