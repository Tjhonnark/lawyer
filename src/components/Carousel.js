import {Container, CarouselItem1, CarouselItem2, CarouselItem3, OverlayImage1, OverlayImage2, OverlayImage3 } from '../styles/styleCarousel';

export default function Carousel() {

    return (
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={CarouselItem1}>
            <div className="overlay-image" style={OverlayImage1}></div>
          <div className="container" style={Container}>
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-light" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={CarouselItem2}>
        <div className="overlay-image" style={OverlayImage2}></div>
          <div className="container" style={Container}>
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-light" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={CarouselItem3}>
        <div className="overlay-image" style={OverlayImage3}></div>
          <div className="container" style={Container}>
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-light" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
    )
}