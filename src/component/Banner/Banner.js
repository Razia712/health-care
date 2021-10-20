import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../image/banner.jpg'
import banner2 from '../../image/banner1.jpg'
import banner3 from '../../image/banner2.jpg'

const Banner = () => {
    return (

        <div>
            <>
                <Carousel className="img-fluid">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>welcome</h3>
                            <p>Medica hospital provide best survice</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>welcome</h3>
                            <p>Medica hospital provide best survice</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Medica hospital provide best survice</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>



    );
};

export default Banner;