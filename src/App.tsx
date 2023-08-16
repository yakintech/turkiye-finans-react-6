import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./routerSample/Home"
import About from "./routerSample/About"
import Contact from "./routerSample/Contact"
import Blog from "./routerSample/Blog"
import Suppliers from "./routerSample/Suppliers"
import SupplierDetail from "./routerSample/SupplierDetail"
import { routes } from "./routerSample/routes"
import BasicComponents from "./materialSample/BasicComponents"
import GridSample from "./materialSample/GridSample"

function App() {

  return <GridSample/>

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
      {
        routes.map((item:any) => {
          return <Route path={item.path} element={item.element}></Route>
        })
      }
    </Routes>

    <footer>
      <p>@2023 Türkiye Finans</p>
    </footer>

  </>
}

export default App

//<> </> boş taglere fragment denir!