import SonFlowLogo from "../../assets/hero/sonflow.png";
import RotorkLogo from "../../assets/hero/rotork.png"
import CleanPhoto from "../../assets/cleanPHE/cleanphe1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
  {
    id: 1,
    img: SonFlowLogo,
    title: "SonFlow（赛富乐）",
    description:
      "源自丹麦的换热器品牌，创始人Aage Sondergaard Nielsen自1979年专注板式换热器的研发，拥有近50年成熟的研发经验。",
  },
  {
    id: 2,
    img: RotorkLogo,
    title: "Rotork（罗托克）",
    description:
      "Rotork 在工业阀门执行器,阀门控制系统,阀门齿轮箱及附件的设计和生产上居世界领导地位。",
  },
  {
    id: 3,
    img: CleanPhoto,
    title: "换热器清洗维护",
    description:
      "我们的工程师自2009年起即从事换热器的清洗维护服务，具有丰富的经验。",
  },


];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden  bg-gray-100 flex justify-center items-center">
      {/* hero section */}
      <div className="container pb-0 ">
        <Slider {...settings}>
          {
            ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:pd-4">
                  {/* text content section */}
                  <div className="flex flex-col justify-center sm:gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      className="text-lg sm:text-4xl  font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      className="relative z-10"
                    >
                      <img 
                        src={data.img}
                        alt=""
                        className="w-[150px] h-[150px] sm:h-[225px] sm:w-[225px] sm:scale-105 lg:scale-120 object-contain mx-auto rounded-lg my-5"
                      />
                    </div>
                  </div>
                </div>            
              </div>           
            ))
          }
        </Slider>
      </div>  
    </div>


  );
};

export default Hero;