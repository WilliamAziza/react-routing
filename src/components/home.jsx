import React from 'react';
import { images } from './images';

const Home = () => {
    return (
        <div>
             <h1 className='real'>REAL MADRID FOOTBALL CLUB <span><img src={images.madrid} alt="" height="70px"/></span></h1>
            <p className='homeText'>La Decima arrives at Real Madrid City</p>
        </div>
    );
}

export default Home;
