import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { routes } from "./routerSample/routes"
import DataGridSample from "./materialSample/DataGridSample"
import { useContext } from "react"
import { CartContext, CartContextType } from "./context/CartContext"

function App() {

  console.log("App component rendered!");

  const { cart, setcart } = useContext(CartContext) as CartContextType;

  return <>
    <header>
      <ul style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li> */}
        {/* <li><Link to='/products'>Products</Link></li> */}
        {/* <li><Link to='/counter'>Counter</Link></li> */}
        <li><Link to='/productspage'>Products Page</Link></li>
        <li><Link to='/cart'>Cart</Link> <span style={{ color: 'red' }}>({cart.length})</span></li>


      </ul>
    </header>

    <Routes>
      {
        routes.map((item: any) => {
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