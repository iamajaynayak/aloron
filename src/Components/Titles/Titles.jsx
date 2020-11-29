import React from 'react';
import './titles.css';

const Titles = ({title}) => {
    return(
        <div className="titles">
            <span className="title-heading">{title}</span>
        </div>
    )
}

export default Titles;