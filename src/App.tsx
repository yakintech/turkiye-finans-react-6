import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./routerSample/Home"
import About from "./routerSample/About"
import Contact from "./routerSample/Contact"
import Blog from "./routerSample/Blog"
import Suppliers from "./routerSample/Suppliers"
import SupplierDetail from "./routerSample/SupplierDetail"

function App() {
  return <>
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li>

      </ul>
    </header>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/suppliers" element={<Suppliers/>}></Route>
      <Route path='/suppliers/:id' element={<SupplierDetail/>}></Route>

    </Routes>

    <footer>
      <p>@2023 Türkiye Finans</p>
    </footer>

  </>
}

export default App

//<> </> boş taglere fragment denir!