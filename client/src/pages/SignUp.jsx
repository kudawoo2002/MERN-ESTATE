import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold my-7 text-center">Sign Up</h1>
      <form className="flex flex-col gap-3 w-6xl items-center">
        <input
          type="text"
          placeholder="Username"
          required
          id="username"
          className="rounded-lg p-3 border w-sm sm:w-xl"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          className="rounded-lg p-3 border w-sm sm:w-xl"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rounded-lg p-3 border w-sm sm:w-xl"
        />
        <button className="bg-sky-700 p-3 w-sm sm:w-xl rounded-lg text-2xl font-bold text-white cursor-pointer border-none uppercase hover:opacity-80">
          Sign up
        </button>
      </form>
      <div className="m-3">
        <p className="text-2xl">
          Have an account?{" "}
          <Link to="/sign-in" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
