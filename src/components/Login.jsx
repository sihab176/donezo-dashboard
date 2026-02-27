import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <section className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="max-w-1/3 mx-auto p-6 rounded-md sm:p-10 bg-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handlesubmit} action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="hj7na"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                className="w-full px-8 py-3 font-semibold rounded-md cursor-pointer bg-green-700 hover:bg-green-600  text-gray-50"
                fdprocessedid="y5q6bc"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                to="/register"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
