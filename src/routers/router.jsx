import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/home/About"; 
import Project from "../pages/home/Project";
import ProjectDetails from '../pages/home/ProjectDetails';
import Gallery from '../components/sliderGallery'; 
import ContactUs from "../components/ContactUs";
import GlassType from "../pages/home/GlassType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/projects",
        element: <Project/>
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/glass-types/:type",
        element: <GlassType />, // Component to render for each glass type
      },
    
      {
        path: "/gallery/:productName", // Ensure this route matches your implementation
        element: <Gallery />,
      },
    ]
  },
]);

export default router;
