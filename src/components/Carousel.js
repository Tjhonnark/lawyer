import Image from 'next/image';
import { sliders } from './data/Sliders';
import { Container, CarouselItem, OverlayImage } from '../styles/styleCarousel';

export default function Carousel() {

  return (
    <div>
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {sliders.map((slider) => {
            return (
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={slider.id} className={slider.indicator} aria-label={slider.label} key={slider.id}></button>
            )
        })}
      </div>
        <div className="carousel-inner">
          {sliders.map((slider) => {
            return (
              <div className={slider.item} key={slider.id} style={CarouselItem}>
                <img
                className="" 
                src={slider.img} 
                style={OverlayImage} />
                <div className='container' style={Container}>
                  <div className={slider.container} >
                    <h1>{slider.title}</h1>
                    <p></p>
                    <p><a className="btn btn-lg btn-light" href="">{slider.buttom}</a></p>
                  </div>
                </div>
              </div>
            )
          })}
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
    </div>
  )
}