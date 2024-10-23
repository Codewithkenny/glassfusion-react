import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/home/About"; 
import Contact from "../pages/home/Contact";
// import Contact from "../pages/contact/Contact"; // Assuming you have a Contact page

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home /> // Home will render Hero
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
     
      
    ]
  },
]);

export default router;
