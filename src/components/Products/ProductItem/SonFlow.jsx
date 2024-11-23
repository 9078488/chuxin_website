import React from 'react'
import GasketPHESonFlow from "../../../assets/sonflowProduct/gasketphe.png"
import FreeFlowPHESonFlow from "../../../assets/sonflowProduct/freeflowphe.png"
import BrazedPHESonFlow from "../../../assets/sonflowProduct/brazedphe.png"
import CondensorSonFlow from "../../../assets/sonflowProduct/condensor2.jpg"

const SonFlow = () => {
  return (
      <div className="
      text-gray-600 text-sm
      pt-0 pl-0 pr-20 space-y-3
      ">
        {/* title */}
        <h1 className='font-bold text-2xl border-b-2 border-primary/40'>赛富乐(SonFlow)换热器</h1>
        {/* brand introduction */}
        <div className='font-bold text-base text-center 
        w-[100px]
       bg-primary/40 rounded-md
        py-1'>
          品牌介绍
        </div>
        <p>
        SonFlow总部位于丹麦科灵，是一家专业生产板式换热器的企业。
        </p>
        <p>
        创始人Aage Sondergaard Nielsen自1979年专注板式换热器的研发，拥有近50年成熟的研发经验。 
        </p>
        <p>
        SonFlow可生产多种系列的板式换热器，包括可拆式、自由流式、钎焊式、蒸发冷凝器等。
        </p>
        <p>
        Sonflow能为用户提供优化的设计方案。换热器的接口尺寸从DN25到DN1000。
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
            可拆式板式换热器
          </div>
          <img src={GasketPHESonFlow} alt=''className='h-[300px] my-5'/>
        </div>
        {/* 自由流板式换热器 */}
        <div>
          <div className='font-bold text-base  
          py-1 border-b-2 border-gray-200'>
            自由流板式换热器
          </div>
          <img src={FreeFlowPHESonFlow} alt=''className='h-[300px] my-5'/>
        </div>
        {/* 钎焊式板式换热器 */}
        <div>
          <div className='font-bold text-base  
          py-1 border-b-2 border-gray-200'>
            钎焊式换热器
          </div>
          <img src={BrazedPHESonFlow} alt=''className='h-[300px] my-5'/>
        </div>
        {/* 蒸发器/冷凝器 */}
        <div>
          <div className='font-bold text-base  
          py-1 border-b-2 border-gray-200'>
            蒸发器/冷凝器
          </div>
          <img src={CondensorSonFlow} alt=''className='h-[300px] my-5'/>
        </div>

      
      </div>

  )
}

export default SonFlow
