import React from 'react'
import Logo from '../../assets/logo.png'
import { FaPhone } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';


const Menu = [
    {
        id: 1,
        name: "公司首页",
        link: "/",
    },
    {
        id: 2,
        name: "关于我们",
        link: "/aboutus",
    },
    {
        id: 3,
        name: "产品中心",
        link: "/products",
    },
    {
        id: 4,
        name: "业绩案例",
        link: "/cases",
    },
    {
        id: 5,
        name: "招聘中心",
        link: "/recruit",
    },
    {
        id: 6,
        name: "联系我们",
        link: "/contact",
    },
]



const Navbar = () => {
    const navigate = useNavigate();

    const handleNavItemClick = (data) => {
        navigate(data.link);
      }

    return (
        <div className='shadow-md bg-white relative z-40'>
            {/* upper Navbar */}
            <div className='bg-primary/60 py-5'>
                <div className='container flex
                justify-between items-center'>
                    {/* Logo and Name */}
                    <div>
                        <a className='font-bold
                        text-2xl sm:text-3xl flex gap-6 items-center '>
                            <img src={Logo} alt='Logo'
                            className='w-[60px] sm:w-[120px]'/>
                            <span 
                            className='text-blue-900 hidden sm:block'
                            >
                                楚信环保科技
                            </span>
                        </a>
                    </div>
                    {/* Telephone on the right */}
                    <div className='flex items-center gap-3'>
                        <FaPhone className="sm:text-3xl text-gray-600 drop-shadow-sm cursor-pointer" />
                        <span 
                        className='sm:text-2xl text-gray-600 font-semibold'
                        >
                            021-3468 1851 
                        </span>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div className='py-4 flex items-center justify-center'>
                <ul className='flex items-center gap-1 sm:gap-12'>
                    {
                        Menu.map((data) => (
                            <li
                            key={data.id}
                            onClick={() => handleNavItemClick(data)}
                            className='inline-block px-1 sm:px-4
                            hover:bg-primary hover:text-white 
                            sm:hover:scale-150 duration-200 cursor-pointer 
                            rounded-md sm:rounded-full 
                            text-xs sm:text-base font-semibold' 
                            >
                            {data.name}
                            </li>  
                        ))
                    }       
                </ul>
            </div>
        </div>
      )
}

export default Navbar

