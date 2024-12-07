import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
  

    try {
      let response = await fetch("http://127.0.0.1:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          userORemail: email,  
          pwd: password        
        }),
      });

      let respData = await response.json();
      console.log(respData);
      if (respData.status==="success") {
        
        
        window.location.href = "/Profiles";
      } else {
        console.error("Login failed");
      }

    } catch (err) {
      console.log(err);
    }finally{
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="flex h-screen bg-[#f0faff] px-20 pt-20  pb-20 items-center justify-center ">
        <div className="w-full max-w-md mx-auto flex flex-col justify-center rounded-lg p-8 ">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Welcome back
          </h2>
          <p className="text-gray-400 mb-6">
            Dont have an account?{" "}
            <a
              href="#"
              className="text-blue-400 hover:underline"
              onClick={() => {
                window.location.href = "/Register";
              }}
            >
              Sign up.
            </a>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@taxlawsonline.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-700 border-gray-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-500"
              // onClick={() => {
              //   window.location.href = "/Profiles";
              // }}
              onClick={handleSubmit}
            
            >
              Sign in to your account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="w-full border-gray-600" />
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <button className="flex items-center justify-center w-full py-2 px-4 bg-gray-700 rounded-md hover:bg-gray-600 text-white">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-700 rounded-md hover:bg-gray-600 text-white">
              <FaGithub color="#fff" size={25} />
              Sign in with Github
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center justify-center ">
          <img
            src="/login.png"
            alt="Decorative Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </>
  );
};
export default Login;
