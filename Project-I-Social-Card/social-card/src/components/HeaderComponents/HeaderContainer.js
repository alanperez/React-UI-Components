import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
         <div className="head-container">
         
         <ImageThumbnail />
         <HeaderTitle />
         </div>
        )
}

export default HeaderContainer;