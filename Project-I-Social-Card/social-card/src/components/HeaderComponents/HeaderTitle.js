import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
const HeaderTitle = () => {
    return (
        <div className="header-title">
        <h1>LambdaSchool</h1>
        <HeaderContent />
        </div>
    )
}

export default HeaderTitle;