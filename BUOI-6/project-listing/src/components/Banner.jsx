import Slider from "react-slick";
import banner1 from '../../public/images/slide_3_img.webp'
import banner2 from '../../public/images/slide_3_img.webp'

const Banner = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner-main">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner 1" />
          </div>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
