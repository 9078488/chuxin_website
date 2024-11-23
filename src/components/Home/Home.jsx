import Img1 from "../../assets/sonflowProduct/gasketphe1.png"
import Img2 from "../../assets/sonflowProduct/brazedphe.jpg"
import Img3 from "../../assets/sonflowProduct/freeflowphe.png"
import Img4 from "../../assets/sonflowProduct/condensor.png"
import Img5 from "../../assets/rotorkProduct/rotorkProduct2.png"


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "可拆式板式换热器",
  },
  {
    id: 2,
    img: Img2,
    title: "钎焊式换热器",
  },
  {
    id: 3,
    img: Img3,
    title: "自由流板式换热器",
  },
  {
    id: 4,
    img: Img4,
    title: "蒸发器/冷凝器",
  },
  {
    id: 5,
    img: Img5,
    title: "电动执行器",
  },
];

const Home = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section  */}
        <div className='text-center mb-10 max-w-[600px]
        mx-auto'>

          <h1
            className='text-3xl text-primary font-bold'
          >
            畅      销      产      品
          </h1>

        </div>
        {/* Body section  */}
        <div>
          <div className='grid grid-cols-5 place-items-center
          gap-5'>
            {/* card section */}
            {
              ProductsData.map((data) => (
                <div 
                  key={data.id} 
                  className='flex flex-col items-center space-y-3'>
                  <img src={data.img} alt=''
                  className='h-[400px] 
                  object-contain rounded-md'
                  />
                  <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
