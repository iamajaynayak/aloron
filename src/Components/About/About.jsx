import React from 'react';

import Header from '../Header/Header';
import ME from '../../assets/ajay.jpg'

import './about.css';

const About = () => {
    return(
        <div className="about-container">
            <Header />
            <div className="pic-info-container">
                <div className="profile-pic">
                    <img className="my-img" src={ME} alt="my profile pic" />
                </div>
                <div className="about-heading">
                    <span className="name">Hi, I am Ajay Nayak</span>
                    <span className="bio">I am a Javascript Developer, besides that I love reading and writing. My Love for literature led me to build this web app. I'm sharing my writings here :)</span>
                    <span className="aloron"> The Name <strong>Aloron</strong> or আলোড়ন is an Assamese word which stands for 'agitation' </span>
                </div>
            </div>
               <span className="follow-me">Follow me here :</span> 
            <div className="social-media">
                <a href="https://www.instagram.com/iamajaynayak" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/iamajaynayak" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
            </div>
        </div>
    )
}

export default About;