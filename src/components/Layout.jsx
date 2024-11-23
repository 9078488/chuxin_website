import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import { Outlet  } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Outlet />

      <Footer />

    </div>
  )
}

export default Layout
