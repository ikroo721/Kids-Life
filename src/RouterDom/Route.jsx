/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import About from '../Components/About/About.jsx'
import App from '../App.jsx'
import OurStaff from "../Components/Our Staff/OurStaff.jsx";
import OurPortfolio from "../Components/Our Portfolio/OurPortfolio.jsx";
import NotFound from "../Components/404/NotFound.jsx";
import Shop from "../Components/ShopPage/Shop.jsx";
import Contact from "../Components/ContactUs/Contact.jsx";
import EventPage from '../Components/EventPage/EventPage.jsx'
import Services from "../Components/ServicesPage/Services.jsx";
import ShopProduct from "../Components/ShopPage/ShopProduct.jsx";
import FirstPage from "../Components/ShopPage/FirstPage.jsx";


const Route=createBrowserRouter([{
        path:"/",
        element: <Home/>,
        children:[
        {
        path:"/",
        index:true,
        element:<App/>    
        },
        {
        path:"/aboutus",
        element: <About/>
        },
        {
            path:"/staff",
            element:<OurStaff/>
        },
        {
            path:"/services",
            element:<Services/>
        },
        {
            path:"/events",
            element:<EventPage/>
        },
        {
            path:"/portfolio",
            element:<OurPortfolio/>
        },
        {
            path:"/pages",
            element:<NotFound/>,
        },
        {
            path:"/blog",
            element:<NotFound/>
        },
        {
            path:"/shop",
            element:<Shop/>,
            children:[
                {
path:"/shop",
index:true,
element:<FirstPage/>
                },
                {
                    path:"/shop/:categ",
                    element:<ShopProduct/>,
                    
                },
            ]
        },
      
        {
            path:"/contact",
            element:<Contact/>
        }  
    ]
}]) 
export default Route;