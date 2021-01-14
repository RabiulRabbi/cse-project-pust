import React from 'react';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-section">
            <div className="marquee-container">
                <marquee behavior="scroll" direction="left" scrollamount="12">
                    <a href="#">Welcome to Computer Science & Engineering (PUST) new website.</a>
                </marquee>
            </div>
        </div>
    );
};

export default Marquee;