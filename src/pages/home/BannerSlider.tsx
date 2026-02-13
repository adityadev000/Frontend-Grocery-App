import Slider from "react-slick";

interface BannerSliderProps {
  images: string[];
  height?: string;
}

const BannerSlider = ({
  images,
  height = "h-40 md:h-56",
}: BannerSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center gap-2 mt-3">
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="mt-6">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt="banner"
              className={`w-full ${height} object-cover rounded-2xl`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
