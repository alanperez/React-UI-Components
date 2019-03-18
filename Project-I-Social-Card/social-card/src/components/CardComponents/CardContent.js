import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
    <div className="card-content-box">
    <div className="card-content-info">
    <h1 className="card-content-title">Get Started With React</h1>
    <p className="card-content-p">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
    <a className="link" href="www.reactjs.org">reactjs.org</a>
    </div>
    </div>
    )
}

export default CardContent;