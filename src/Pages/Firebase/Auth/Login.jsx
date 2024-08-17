import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle,FaGithub  } from "react-icons/fa";
import { AuthContext } from "../Firebaseprovider";

const Login = () => {
  const [showPassword, setShowpassword] = useState(false);

  const { SigninUser, loginGithub, loginGoogle } = useContext(AuthContext);
  const handleGithub = () => {
    loginGithub();
  };

  const handleGoogle = () => {
    loginGoogle();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SigninUser(email, password)
      .then(() => toast.success("login succesfull"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
    

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <div className="flex gap-4">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "password" : "text"}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button onClick={() => setShowpassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
                <p>
                  Dont Have an account?
                  <span>
                    <Link to={"/Register"} className="btn btn-ghost">
                      {" "}
                      Sign In
                    </Link>
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="divider-primary divider">Sign in with social</div>

            <div className="flex gap-4 justify-center">
              <div>
                <button className="btn" onClick={handleGithub}>
                <FaGithub></FaGithub> Github
                </button>
              </div>
              <div>
                {" "}
                <button className="btn" onClick={handleGoogle}>
                <FaGoogle></FaGoogle> Google
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full btn justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
