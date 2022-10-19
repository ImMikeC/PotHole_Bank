import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/Showcase.css";

const Showcase = () => {

    const showcasehome = {
        title1: 'One Road Fixed',
        subtitle1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.1',
        imageURL1: './assets/img/Road1.png',
        title2: 'Two Roads Fixed',
        subtitle2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.2',
        imageURL2: './assets/img/Road2.png',
        title3: 'Every Road Fixed!',
        subtitle3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.3',
        imageURL3: './assets/img/Road3.png',
    }

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={showcasehome.imageURL1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{showcasehome.title1}</h3>
                    <p>{showcasehome.subtitle1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={showcasehome.imageURL2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>{showcasehome.title2}</h3>
                    <p>{showcasehome.subtitle2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={showcasehome.imageURL3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{showcasehome.title3}</h3>
                    <p>{showcasehome.subtitle3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Showcase;