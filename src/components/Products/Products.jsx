import { Outlet  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const productItems = [
  {
    id: 1,
    name: "赛富乐(SonFlow)换热器",
    link: "/products/sonflow",
  },
  {
    id: 2,
    name: "罗托克(Rotork)执行器",
    link: "/products/rotork",
  },
  {
    id: 3,
    name: "板式换热器清洗维护",
    link: "/products/cleanphe",
  },
]

const Products = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (data) => {
    navigate(data.link);
  }

  return (
      <div>
        <div className="flex pt-4 pb-5">

          {/* Left Part */}
          <div className="w-[25%] flex flex-col items-center">
            {/* Upper Part */}
            <div className="text-center text-3xl font-bold bg-primary/60 text-white rounded-md px-8 py-3">
              产 品 中 心
            </div>
            {/* Product List */}
            <div className="pt-5">
              <ul
                className="font-medium pb-80 space-y-6"
              >
                {productItems.map((data) => (
                  <li 
                  key={data.id}
                  className="py-2 px-3 flex items-center
                 hover:bg-primary hover:text-white
                 duration-200 cursor-pointer 
                 rounded-lg"
                  onClick={() => handleNavItemClick(data)}
                  >
                    <IoIosArrowForward className="mr-2" />
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Part */}
          <div className="w-[75%]">
              <Outlet />
          </div>
        </div>
      </div>
    );
}

export default Products
