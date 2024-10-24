import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/home/About"; 
import Contact from "../pages/home/Contact";
import Project from "../pages/home/Project";
import ProjectDetails from '../pages/home/ProjectDetails';
import Gallery from '../components/sliderGallery'; 

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
        element: <Contact/>
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
        path: "/gallery/:productName", // Ensure this route matches your implementation
        element: <Gallery />,
      },
    ]
  },
]);

export default router;
