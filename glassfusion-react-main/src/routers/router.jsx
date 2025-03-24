import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/home/About"; 
import Project from "../pages/home/Project";
import ProjectDetails from '../pages/home/ProjectDetails';
import ProjectOverview from "../components/ProjectOverview";
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
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/projects",
        element: <Project />
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/project-gallery/:id",
        element: <ProjectOverview />,
      },
      {
        path: "/glass-types/:type",
        element: <GlassType />
      },
      
      {
        path: "/gallery/:productName", 
        element: <Gallery />,
      },
    ]
  },
]);

export default router;
