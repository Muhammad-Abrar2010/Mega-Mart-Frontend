import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebaseprovider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const displayName = e.target.displayName.value;
    if (password.length < 6) {
      return toast.error("Password must be longer than 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must have at least one lowercase letter");
    }

    createUser(email, password, displayName, photoURL)
      .then(() => {
        toast.success("Successfully Created Account");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="border-2">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Sign Up Now!</h1>
          </div>
          <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="form-control">
                  <span>Display Name</span>
                  <input
                    type="text"
                    required
                    name="displayName"
                    placeholder="Display Name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="form-control">
                  <span>PhotoUrl</span>
                  <input
                    type="text"
                    required
                    name="photoURL"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control flex">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <button onClick={() => setShowpassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
              </div>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to={"/Login"} className="btn btn-ghost p-2 m-0">
                    {" "}
                    Sign In
                  </Link>
                </span>{" "}
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
