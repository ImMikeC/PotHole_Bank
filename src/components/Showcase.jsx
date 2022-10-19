import React from 'react';

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
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={showcasehome.imageURL1} class="d-block w-100" alt="Slide 1" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title1}</h5>
                        <p>{showcasehome.subtitle1}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={showcasehome.imageURL2} class="d-block w-100" alt="Slide 2" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title2}</h5>
                        <p>{showcasehome.subtitle2}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={showcasehome.imageURL3} class="d-block w-100" alt="Slide 3" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title3}</h5>
                        <p>{showcasehome.subtitle3}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Showcase;