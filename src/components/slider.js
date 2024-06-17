import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Dollar, Location, Rating } from "../icon/icon";


function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let Slide=(props)=>{
    let {img,name,rating,city,usd}=props
    return(
      <>
        <div className="card mx-2">
          <img src={img} className="w-100 rounded" style={{height:"250px"}} alt="#"/>
          <div className="card-body">
            <div className="d-flex">
              <h3>{name}</h3>
              <div className="d-flex ms-auto gap-2">
                <Rating/>
                <h5>{rating}</h5>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="rounded-pill px-2 bg-black text-white"><Location/></div>
              <h5>{city}</h5>
              <div className="rounded-pill px-2 bg-black text-white"><Dollar/></div>
              <h5>{usd}</h5>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</p>
          </div>
          <footer className="card-footer text-center text-white py-3" style={{background:"#4C3BCF",fontWeight:"bold"}}>
            Book Now
          </footer>
        </div>
      </>
    )
  }
  return (
    <div className="container">
      <h1 className="my-5" style={{fontWeight:"bold"}}>Popular Hotels</h1>
      <Slider {...settings}>
          <div>
            <Slide
              img="images/slide1.PNG"
              name="Soho Paradise"
              rating ={4.9}
              city = "Ibiza, Spain"
              usd="USD 50/Day"
            />
          </div>
          <div>
            <Slide
                img="images/slide2.PNG"
                name="Hotel Baja"
                rating = "5.0"
                city = "Palo Alto, CA"
                usd="USD 19/Day"
              />
          </div>
          <div>
            <Slide
                img="images/slide3.PNG"
                name="Hudak Homes"
                rating={4.5}
                city = "Arizona, RAK"
                usd="USD 99/Day"
              />
          </div>
          <div>
            <Slide
                img="images/slide4.PNG"
                name="Wyatt Residency"
                rating={4.8}
                city = "Rome, Italy"
                usd="USD 39/Day"
              />
          </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;