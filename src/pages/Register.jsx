import { Link, useNavigate } from "react-router-dom";
import loginLottie from "../assets/lottieFiles/loginLottie.json";
import Lottie from "lottie-react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useTheme from "../hooks/useTheme";
const Register = () => {
  const { createNewUser, loginWithGoogle, updateUser } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  // create a new user with email and password
  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (typeof name !== "string" || !/^[A-Za-z\s'-]{2,50}$/.test(name.trim())) {
      return toast.error("Please enter a valid name");
    } else if (password.length < 6) {
      return toast.error("Password should be more than 6 characters or longer");
    }

    const updateInfo = {
      displayName: name,
      photoURL: photo,
    };

    createNewUser(email, password)
      .then((res) => {
        updateUser(res.user, updateInfo);
        toast.success("Register succsessfull!");
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // derect login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success('Login succsessfull!');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-center gap-10 pt-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <Lottie animationData={loginLottie} className="w-5/6"></Lottie>
        </div>
        <div className={`w-full max-w-md p-4 rounded-md sm:p-8  shadow-md ${theme === 'light' ? 'bg-base-100 text-gray-800 border border-[#E0E0E0]' : 'bg-[#26313d] text-white'}`}>
          <h2 className={`mb-3 text-3xl font-bold text-center ${theme === 'light' ? 'text-[#2E2E2E]' : ''}`}>
            Create your account
          </h2>
          <p className={`text-sm text-center ${theme === 'light' ? 'text-[#757575]' : ''}`}>
            Already have an account?&nbsp;
            <Link
              to={"/login"}
              className="focus:underline hover:underline text-[#3A86FF]"
            >
              Login here
            </Link>
          </p>

          {/* google login */}
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-gray-400 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form onSubmit={handleCreateUser} className="space-y-8">
            <div className="space-y-4">
              {/* name */}
              <div className="space-y-2">
                <label className="block text-sm">Name</label>
                <input
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className={`w-full px-3 py-2 border rounded-md focus:dark:border-violet-600 ${theme === 'light' ? 'dark:border-gray-300 dark:text-gray-800' : ''}`}
                />
              </div>

              {/* email */}
              <div className="space-y-2">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="demo@gmail.com"
                  className={`w-full px-3 py-2 border rounded-md focus:dark:border-violet-600 ${theme === 'light' ? 'dark:border-gray-300 dark:text-gray-800' : ''}`}
                />
              </div>

              {/* password */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className={`w-full px-3 py-2 border rounded-md focus:dark:border-violet-600 ${theme === 'light' ? 'dark:border-gray-300 dark:text-gray-800' : ''}`}
                />
              </div>

              {/* Photo URL */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Photo URL</label>
                </div>
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  placeholder="*****"
                  className={`w-full px-3 py-2 border rounded-md focus:dark:border-violet-600 ${theme === 'light' ? 'dark:border-gray-300 dark:text-gray-800' : ''}`}
                />
              </div>
            </div>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#F2D701] px-8 font-medium text-black cursor-pointer w-full">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
              Register
              </div>
              <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
              Register
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
