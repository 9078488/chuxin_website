import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Layout from "./components/Layout"
import Aboutus from "./components/Aboutus/Aboutus";
import Products from "./components/Products/Products";
import Cases from "./components/Cases/Cases";
import Recruit from "./components/Recruit/Recruit";
import Contact from "./components/Contact/Contact"
import SonFlow from "./components/Products/ProductItem/SonFlow";
import Rotork from "./components/Products/ProductItem/Rotork";
import CleanPHE from "./components/Products/ProductItem/CleanPHE";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/products" element={<Products />}>
              <Route index element={<SonFlow />}></Route>
              <Route path="/products/sonflow" element={<SonFlow />}></Route>
              <Route path="/products/rotork" element={<Rotork />}></Route>
              <Route path="/products/cleanphe" element={<CleanPHE/>}></Route>
            </Route>
            <Route path="/cases" element={<Cases />}></Route>
            <Route path="/recruit" element={<Recruit />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
