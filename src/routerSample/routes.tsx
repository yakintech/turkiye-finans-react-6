import DataGridSample from "../materialSample/DataGridSample";
import ProductDetail from "../materialSample/ProductDetail";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import SupplierDetail from "./SupplierDetail";
import Suppliers from "./Suppliers";


export const routes = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },
    {
        path:'/blog',
        element: <Blog/>
    },
    {
        path:'/suppliers',
        element: <Suppliers/>
    },
    {
        path:'/suppliers/:id',
        element: <SupplierDetail/>
    },
    {
        path:'/products',
        element: <DataGridSample/>
    },
    {
        path:'/products/:id',
        element: <ProductDetail/>
    }
]