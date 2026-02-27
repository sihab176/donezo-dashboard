import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [requiredError, setRequiredError] = useState("");

  // TODO : Implement registration logic
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password, name);
    setRequiredError("");
    const regex = /^(?=.*[A-Z]).+$/;
    const lowercaseRegex = /[a-z]/;
    if (regex.test(password) === false) {
      setRequiredError("password must be one Uppercase");

      return;
    } else if (lowercaseRegex.test(password) === false) {
      setRequiredError("password must be lowersCase");

      return;
    }

    // Todo: create user with email and password
    createUser(email, password)
      .then((result) => {
        const users = result.users;
        updateUser({ displayName: name }).then(() => {
          setUser({ ...users, displayName: name });
          navigate("/dashboard");
          alert("User created successfully");
        });
      })
      .catch((error) => {
        console.log(error);
        alert("User creation failed: " + error.message);
      });
  };
  console.log(requiredError);
  return (
    <section className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="max-w-4xl p-6 rounded-md sm:p-10 bg-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to access your account
          </p>
        </div>
        <form onSubmit={handlesubmit} action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
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
              {requiredError && (
                <p className="text-red-500 text-xs">{requiredError}</p>
              )}
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
              Already have an account?
              <Link
                to="/"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
