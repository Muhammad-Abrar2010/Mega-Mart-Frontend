import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import App from "./Pages/Home/App";
import Register from "./Pages/Firebase/Auth/Register";
import Login from "./Pages/Firebase/Auth/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:
    [
      {
        path:"/",
        element:<App></App>
      },
      {
        path:"/Register",
        element:<Register></Register>
      },
      {
        path:"Login",
        element:<Login></Login>
      }
    ]
  },
]);

export default Router;
