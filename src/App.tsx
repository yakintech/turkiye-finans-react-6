import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { routes } from "./routerSample/routes"
import DataGridSample from "./materialSample/DataGridSample"

function App() {

  return <DataGridSample/>

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