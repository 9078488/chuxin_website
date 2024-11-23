import RotorkProduct from "../../../assets/rotorkProduct/rotorkProduct.jpg"

const Rotork = () => {
  return (
      <div className="
      text-gray-600 text-sm
      pt-0 pl-0 pr-20 space-y-3
      ">
        {/* title */}
        <h1 className='font-bold text-2xl border-b-2 border-primary/40'>罗托克(Rotork)执行器</h1>
        {/* brand introduction */}
        <div className='font-bold text-base text-center 
        w-[100px]
       bg-primary/40 rounded-md
        py-1'>
          品牌介绍
        </div>
        <p>
        Rotork 在工业阀门执行器,阀门控制系统,阀门齿轮箱及附件的设计和生产上居世界领导地位。
        </p>
        {/* product introduction */}
        <div className='font-bold text-base text-center 
        w-[100px]
       bg-primary/40 rounded-md
        py-1'>
          产品系列
        </div>
        {/* 电动执行器 */}
        <div>
          <div className='font-bold text-base  
          py-1 border-b-2 border-gray-200'>
            电动执行器
          </div>
          <img src={RotorkProduct} alt=''className='h-[300px] my-5'/>
        </div>     
      </div>

  )
}

export default Rotork
