
const Aboutus = () => {
    return (
        <div>
          <div className="flex pt-4 pb-5">
            {/* Left Part */}
            <div className="w-[25%] flex items-start justify-center pb-80" >
              <div className="text-center text-3xl font-bold bg-primary/60 text-white rounded-md px-8 py-3">
                关 于 我 们
              </div>
            </div>
            {/* Right Part */}
            <div className="w-[75%]">
              <div className="
              text-gray-600 text-sm
              pt-0 pl-0 pr-20 space-y-3
              ">
                <h1 className='font-bold text-2xl border-b-2 border-primary/40'>关于我们</h1>
                <p>
                    楚信环保科技（上海）有限公司是一家专业从事板式换热器销售、清洗与维护服务的企业。
                    作为丹麦知名换热器品牌赛富乐的全国总代理，我们致力于为国内客户提供先进、高效的换热解决方案。
                </p>
                <p>
                    公司依托赛富乐的全球领先技术与丰富经验，覆盖广泛的行业应用，包括暖通空调、食品饮料、化工、制药等领域。
                    我们不仅提供优质的产品，还为客户量身定制全面的技术支持与售后服务，确保产品在各类复杂工况下的最佳性能。
                </p>
                <p>
                    凭借卓越的市场表现和良好的行业口碑，楚信环保科技不断拓展业务，积极与各大设计院、工程公司以及终端用户保持紧密合作。
                    我们的团队由经验丰富的销售、技术与服务专家组成，以客户需求为导向，提供从产品选择、安装到后期维护的一站式服务。                      
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Aboutus
