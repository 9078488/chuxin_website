import Img1 from "../../assets/cases/1mapailuntai.png"
import Img2 from "../../assets/cases/2yangzhoujiangzhiye.png"
import Img3 from "../../assets/cases/3guteyi.png"
import Img4 from "../../assets/cases/4yingchuangtezhonghuaxue.png"
import Img5 from "../../assets/cases/5shanghaidianlidaxue.png"
import Img6 from "../../assets/cases/6xikebandaoti.png"
import Img7 from "../../assets/cases/7jiangsurenkangdanye.png"
import Img8 from "../../assets/cases/8fujianyongrongjinjiang.png"
import Img9 from "../../assets/cases/9shanghaiwujingredianchang.png"
import Img10 from "../../assets/cases/10ouwensikening.png"
import Img11 from "../../assets/cases/11kekekele.png"
import Img12 from "../../assets/cases/12wangwang.png"

const cases = [
  {
    id: 1,
    img: Img1,
    brand: "马牌轮胎"
  },
  {
    id: 2,
    img: Img2,
    brand: "亚洲浆纸业"
  },
  {
    id: 3,
    img: Img3,
    brand: "固特异"
  },
  {
    id: 4,
    img: Img4,
    brand: "赢创特种化学"
  },
  {
    id: 5,
    img: Img5,
    brand: "上海电力大学"
  },
  {
    id: 6,
    img: Img6,
    brand: "希科半导体"
  },
  {
    id: 7,
    img: Img7,
    brand: "江苏仁康蛋业"
  },
  {
    id: 8,
    img: Img8,
    brand: "福建永荣锦江"
  },
  {
    id: 9,
    img: Img9,
    brand: "上海吴泾热电厂"
  },
  {
    id: 10,
    img: Img10,
    brand: "欧文斯科宁"
  },
  {
    id: 11,
    img: Img11,
    brand: "可口可乐"
  },
  {
    id: 12,
    img: Img12,
    brand: "旺旺集团"
  },
]

const Cases = () => {
  return (
      <div>
        <div className="flex pt-4 pb-5">
          {/* Left Part */}
          <div className="w-[25%] flex items-start justify-center pb-80">
            <div className="text-center text-3xl font-bold bg-primary/60 text-white rounded-md px-8 py-3">
              业 绩 案 例
            </div>
          </div>
          {/* Right Part */}
          <div className="w-[75%]">
            <div className="
            text-gray-600 text-sm
            pt-0 pl-0 pr-20 space-y-3
            ">
              <h1 className='font-bold text-2xl border-b-2 border-primary/40'>业绩案例</h1>
              <div classname="">
              <div className="grid grid-cols-3 gap-y-10 gap-x-5">
                {cases.map((data) => (
                  <div key={data.id} className="flex flex-col items-center border-2
                   border-gray-200 rounded-lg">
                    <img src={data.img} alt="" className="w-[250px]  pt-0" />
                    <div className="mt-2 text-center pb-5">
                      {data.brand}
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cases
