import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CopyRightText from "../components/CopyRightText";
import ResetPasswordImage from "../../images/reset-password.png";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((res) => setTimeout(res, 2000));
    toast.success(
      "If an account exists with this email, a reset link has been sent."
    );
    reset();
  };

  return (
    <>
      <Header />

      <ToastContainer
        position="top-right"
        className="text-left"
        autoClose={3000}
      />

      <section id="reset-password-2" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-1/2 lg:w-7/12 px-4 mb-8 md:mb-0">
              <div className="text-center">
                <img
                  src={ResetPasswordImage}
                  alt="reset-password-image"
                  className="mx-auto max-w-full h-auto"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-5/12 px-4">
              <div className="max-w-md mx-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold mb-2 text-[#2f353e]">
                      Forgot your password?
                    </h4>
                    <p className="text-md text-gray-600">
                      Enter your email address. If an account exists, we’ll send
                      you a link to reset your password.
                    </p>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
                        ${
                          errors.email
                            ? "border-red-500 focus:ring-red-400 text-red-600 placeholder-red-400"
                            : "border-gray-300 focus:ring-sky-400"
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0195ff] border-[1px] border-[#0195ff] hover:cursor-pointer hover:bg-white hover:text-black hover:border-black text-white rounded-md md:text-lg text-[16px] font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Reset My Password"}
                    </button>
                  </div>

                  <div className="flex justify-center mb-24">
                    <p className="text-sm text-gray-500">
                      <a
                        href="/login"
                        className="text-[#6c757d] hover:underline"
                      >
                        Never mind, I remembered!
                      </a>
                    </p>
                  </div>
                </form>

                <CopyRightText />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResetPasswordPage;
