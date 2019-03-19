import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import 'moment-timezone';
import moment from 'moment';
const time = moment();


const HeaderTitle = () => {
    return (
        <div className="header-title">
        <div className="header-title-info">
        <h1>LambdaSchool</h1>
        <p className="date">@lambdaschool {time.format('Do MMM ')}</p>
        
        <HeaderContent />
        </div>
        </div>
    )
}

export default HeaderTitle;