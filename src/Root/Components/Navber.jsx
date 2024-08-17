import { Link } from "react-router-dom";
const Navber = () => {
  return (
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>Mega Mart</h2>
        </div>
       
        <div className="flex">
        
          <li className="cursor-pointer flex gap-2 list-none rounded-full px-6 py-2 text-white hover:bg-sky-600">
            <Link to={"/login"}> Login</Link>
          </li>
          <li className="cursor-pointer flex gap-2 list-none rounded-full px-6 py-2 text-white hover:bg-sky-600">
            <Link to={"/Register"}> Register</Link>
          </li>
        </div>
      </nav>
  );
};

export default Navber;
