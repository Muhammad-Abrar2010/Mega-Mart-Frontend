import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import App from "./Pages/Home/App";

const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:
    [
      {
        path:"/",
        element:<App></App>
      }
    ]
  },
]);

export default Router;
