import Carousel from 'react-bootstrap/Carousel';
import React ,{ useState, useEffect } from 'react';

function Slider() {
  return (
    <Carousel>
            <Carousel.Item className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW DISCOUNT : Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                    <p className="card-text lead fs-2">CHECK OUT : Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="card text-bg-dark border-0">
                <img src="/assets/bg1.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <p className="card-title display-6 fw-bolder mb-0">NEW DISCOUNT : Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED </p>
                    <p className="card-text lead fs-4">CHECK OUT : 49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="card text-bg-dark border-0">
                <img src="/assets/bg2.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW DISCOUNT : Mens Casual Premium Slim Fit T-Shirts </h5>
                    <p className="card-text lead fs-2">CHECK OUT : Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
                    </div>
                </div>
            </Carousel.Item>
    </Carousel>
  );
}

export default Slider;