import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useForm } from "react-hook-form";
import GoogleAndFacebook from "../components/GoogleAndFacebook";
import CopyRightText from "../components/CopyRightText";
import RegisterImage from "../../images/register.png";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <section className="!relative w-full bg-no-repeat bg-center bg-cover bg-[#eff6ff] pt-[50px] pb-[50px]">
        <div className="relative z-3">
          <div className="mx-3 flex flex-wrap">
            <div className="w-full lg:w-5/12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 md:p-10"
                noValidate
              >
                <div className="mb-6 text-left">
                  <h3 className="font-semibold mb-[10px] text-[#2f353e] text-[40px] tracking-tighter">
                    Log in to IlyaStore
                  </h3>
                  <p className="text-base text-[#6c757d]">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-sky-500 underline font-bold"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Please enter valid email address",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:
                          "Your email address must be in the format of name@domain.com",
                      },
                    })}
                    placeholder="example@example.com"
                    className="w-full h-[60px] px-5 text-[17px] text-gray-800 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  {errors.email && (
                    <p className="text-[#e74c3c] text-[16px] font-normal mb-5 pl-2.5 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-5 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Please enter no less than (2) characters",
                    })}
                    placeholder="Password"
                    className="w-full h-[60px] px-5 text-[17px] text-gray-800 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />

                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-5 cursor-pointer text-gray-600"
                  >
                    {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
                  </span>

                  {errors.password && (
                    <p className="text-[#e74c3c] text-[16px] font-normal mb-5 pl-2.5 text-left">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0195ff] border-[1px] border-[#0195ff] hover:cursor-pointer hover:bg-white hover:text-black hover:border-black text-white rounded-md text-lg font-medium"
                  >
                    Log In
                  </button>
                </div>

                <div className="flex justify-around items-center mb-6 text-sm">
                  <label
                    className="flex items-center space-x-2"
                    htmlFor="remember"
                  >
                    <input
                      type="checkbox"
                      id="remember"
                      {...register("remember")}
                      className="form-checkbox"
                      defaultChecked
                    />
                    <span>Remember Me</span>
                  </label>
                  <Link
                    to="/reset-password"
                    className=" hover:underline text-[#6c757d] hover:text-[#333]"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <div className="text-center mb-6">
                  <div className="relative inline-block text-[1.05rem] font-normal text-gray-600">
                    <span
                      className="before:content-[''] before:absolute before:top-1/2 before:h-[2px] before:bg-black/10 before:right-[100%] before:left-[-300%] 
                     after:content-[''] after:absolute after:top-1/2 after:h-[2px] after:bg-black/10 after:left-[100%] after:right-[-300%] 
                     relative inline-block px-4"
                    >
                      OR
                    </span>
                  </div>
                </div>

                <GoogleAndFacebook />
              </form>

              <CopyRightText />
            </div>

            <div className="w-full lg:w-7/12">
              <img
                src={RegisterImage}
                alt="register"
                className="mx-auto w-3/4"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LoginPage;
