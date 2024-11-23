
const Contact = () => {
  return (
      <div>
        <div className="flex pt-4 pb-5">
          {/* Left Part */}
          <div className="w-[25%] flex items-start justify-center pb-80">
            <div className="text-center text-3xl font-bold bg-primary/60 text-white rounded-md px-8 py-3">
              联 系 我 们
            </div>
          </div>
          {/* Right Part */}
          <div className="w-[75%]">
            <div className="
            text-gray-600 text-sm
            pt-0 pl-0 pr-20 space-y-3
            ">
            {/* title */}
            <h1 className='font-bold text-2xl border-b-2 border-primary/40'>联系我们</h1>
            <div className='font-bold text-base  py-1'>
              楚信环保科技（上海）有限公司
            </div>
            <p>地址：上海市闵行区沪闵路443-445号9幢3楼301室（云境443）</p>
            <p>电话：021-3468 1851</p>
            <p>联系人：石经理 18964005759</p>
            <p>Email：bob.shi@chuxinsh.com  </p>
            <p>https://www.chuxinsh.com/</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
