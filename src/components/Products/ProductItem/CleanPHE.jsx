import CleanPHE1 from "../../../assets/cleanPHE/cleanphe1.jpg"
import CleanPHE2 from "../../../assets/cleanPHE/cleanphe2.jpg"
import CleanPHE3 from "../../../assets/cleanPHE/cleanphe3.jpg"
import CleanPHE4 from "../../../assets/cleanPHE/cleanphe4.jpg"
import CleanPHE5 from "../../../assets/cleanPHE/cleanphe5.jpg"

const CleanPHE = () => {
  return (
      <div className="
      text-gray-600 text-sm
      pt-0 pl-0 pr-20 space-y-3
      ">
        {/* title */}
        <h1 className='font-bold text-2xl border-b-2 border-primary/40'>板式换热器清洗维护</h1>
        {/* brand introduction */}
        <div className='font-bold text-base text-center 
        w-[100px]
       bg-primary/40 rounded-md
        py-1'>
          品牌介绍
        </div>
        <p>
        我司是丹麦桑德斯（Sondex）合作售后服务商。我们的工程师自2009年起即从事换热器的清洗维护服务，具有丰富的经验。我司拥有专业齐全的清洗维护设备和规范的施工
        流程，对清洗维护效果和品质有充分的保障。
        </p>
        <p>
        对市面上主要品牌换热器，我们均可提供专业的清洗维护服务，如阿法拉伐（Alfa
        laval）、赛富乐（SonFlow）、桑德斯（Sondex）、安培威（APV）、传特(Tranter)、
        凯络文（Kelvion）等。      
        </p>


        {/* product introduction */}
        <div className='font-bold text-base text-center 
        w-[100px]
       bg-primary/40 rounded-md
        py-1'>
          产品系列
        </div>
        {/* 可拆式换热器 */}
        <div>
          <div className='font-bold text-base  
          py-1 border-b-2 border-gray-200'>
            现场施工场景
          </div>
          <img src={CleanPHE1} alt=''className='h-[300px] my-5'/>
          <img src={CleanPHE2} alt=''className='h-[300px] my-5'/>
          <img src={CleanPHE3} alt=''className='h-[300px] my-5'/>
          <img src={CleanPHE4} alt=''className='h-[300px] my-5'/>
          <img src={CleanPHE5} alt=''className='h-[300px] my-5'/>
        </div>     
      </div>

  )
}

export default CleanPHE
