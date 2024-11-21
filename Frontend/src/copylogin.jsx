import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Login to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@taxlawsonline.com"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={() => {
                window.location.href = "/ProfileCards";
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              window.location.href = "/Register";
            }}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Need an account ? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
