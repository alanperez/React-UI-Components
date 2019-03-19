import React from 'react';
// import FontAwesomeIcon from 'font-awesome/css/font-awesome.min.css';
// import ''
import './Footer.css';
// import ImageThumbnail from './ImageThumbnail';
// import HeaderTitle from './HeaderTitle';



const Footer = () => {
    
    return (
         <div className="foot-container">
         <div className="fa-icons">
         <a href="www.twitter.com"><i className="far fa-comment" src="www.twitter.com">  </i></a>
         <a href="https://help.twitter.com/en/using-twitter/how-to-retweet"><i className="fas fa-retweet">  6</i></a>
         <a href="https://twitter.com/heart_emojis?lang=en"><i className="far fa-heart">  4</i></a>
         <a href="https://help.twitter.com/en/using-twitter/direct-messages"><i className="far fa-envelope">  </i></a>
         

         </div>
         </div>
        )
}

export default Footer;