import React from 'react';
import { Carousel } from 'react-bootstrap';
import { images } from './images';

const About = () => {
    return (
        <div>
            <h1 className='History'>ABOUT LOS BLANCOS</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images.ucl}
                        alt="First slide"
                        height="600rem"
                    />
                    <Carousel.Caption>
                        <h3 className='ucl'>CLUB WITH MOST UCL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images.liga}
                        alt="Second slide"
                        height="600rem"
                    />

                    <Carousel.Caption>
                        <h3 className='liga'>SPANISH CLUB WITH MOST LEAGUE TROPHIES</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images.bernabeu}
                        alt="Third slide"
                        height="600rem"
                    />

                    <Carousel.Caption>
                        <h3 className='liga'>BIGGEST STADIUM </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default About;
