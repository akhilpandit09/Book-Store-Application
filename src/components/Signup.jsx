import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div id="" className="w-[600px] ">
          <div className="modal-box dark:bg-slate-900 dark:text-white dark:shadow-2xl dark:shadow-black">
            <form
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-6 top-6 dark:text-white"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg mb-12 text-center dark:text-white">
                Sign Up
              </h3>
              <div className="flex flex-col items-center gap-7">
                <div>
                  <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border-white">
                    <FaUser className=" text-slate-500" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Your Name"
                      {...register("name", { required: true })}
                    />
                  </label>
                  {errors.name && (
                    <span className="text-sm text-red-600">
                      Name is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70 dark:text-slate-500"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="email"
                      className="grow"
                      placeholder="Enter Your Email"
                      {...register("email", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <span className="text-sm text-red-600">
                      Email is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70 dark:text-slate-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="gro"
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                    />
                  </label>
                  {errors.password && (
                    <span className="text-sm text-red-600 ">
                      Password is required
                    </span>
                  )}
                </div>
                <button className="btn btn-secondary w-72" type="submit">
                  Sign Up
                </button>
                <p className="dark:text-white font-semibold">
                  If you have an account?{" "}
                  <button
                    className="text-secondary underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
