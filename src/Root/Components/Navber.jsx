import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Firebase/Firebaseprovider";
import { useContext } from "react";
import { toast } from "react-toastify";
const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => toast.success("logout successfull"))
      .catch((error) => toast.error(error.message));
  };
  return (
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link to={"/"}>Mega Mart</Link>
        </div>
       
        <div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar tooltip tooltip-primary tooltip-bottom tooltip-left"data-tip={user.displayName}
                  >
                    <div className="w-10 rounded-full " >
                      <img alt={user.displayName} src={user.photoURL} />
                    </div>
                    
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[10000] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                     <NavLink to={"/Profile"} className="justify-between">
                        Profile
                      </NavLink>
                     
                      
                    </li>
                    <li>
                      <NavLink to={"/Updateprofile"}>Update Profile</NavLink>
                    </li>
                    <li>
                      <a onClick={handleSignOut} className="bg-red-500">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="lg:flex md:flex gap-2 hidden">
                    {" "}
                    <Link
                      className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                      to={"/Register"}
                    >
                      Sign Up
                    </Link>{" "}
                    <Link className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90" to={"/Login"}>
                      Sign In
                    </Link>{" "}
                  </div>
                  <div className="lg:hidden md:hidden ">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 btn-circle  "
                      >
                        login
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[999999] menu p-2 shadow rounded-box w-52 bg-gray-200"
                      >
                        <li>
                          <NavLink to={"/Register"}>Sign Up</NavLink>
                        </li>
                        <div className="divider divider-accent"></div>

                        <li>
                          <NavLink to={"/Login"}>Sign In</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
      </nav>
  );
};

export default Navber;
