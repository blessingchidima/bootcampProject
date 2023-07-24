import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../Components/pages/Homescreen";
import Layout from "../Components/Block/Layout";
import Login from "../Components/pages/Login";
import Sigin from "../Components/pages/Sigin";
import Contact from "../Components/pages/Contact";
// import Service from "../Components/Comp/Service";



export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Homescreen />,
      },

      {
        path: "Login",
        element: < Login/>,
      },
      {
        path: "Sigin",
        element: < Sigin/>,
      },
      {
        path: "Contact",
        element: < Contact/>,
      },
      // {
      //   path: "Service",
      //   element: <Service/>
      // },
    
    
     
    ],
  },
]);
