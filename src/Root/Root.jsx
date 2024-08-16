import { Outlet } from "react-router-dom";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";

const Root = () => {
    return (
       <>
       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
       </>
    );
};

export default Root;