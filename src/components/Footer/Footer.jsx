import React from "react";
import Banner from "../../assets/website/footer-pattern.jpg";


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};



const Footer = () => {
  return (
    <div style={BannerImg} className="text-white flex items-center justify-center h-full">
      <div className="py-10 text-center">
        <div className="font-semibold text-base">楚信环保科技（上海）有限公司</div>
        <div className="text-sm pt-4 space-y-1 ">
          <div className="">地址：上海市闵行区沪闵路443-445号9幢3楼301室（云境443）</div>
          <div>电话：021-3468 1851 </div>
          <div>© 版权归楚信环保科技（上海）有限公司所有</div>
        </div>

      </div>
    </div>
  );
};

export default Footer;