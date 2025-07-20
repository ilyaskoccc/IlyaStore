import React from "react";
import GoogleIcons from "../../images/google.png";
import FacebookIcons from "../../images/facebook.png";

export default function GoogleAndFacebook() {
  return (
    <>
      {/* Google Button */}
      <div className="mb-3">
        <a
          href="#"
          className="flex items-center justify-center w-full py-3 border-[2px] text-[#333] text-[18px] font-medium border-[#ccc] rounded-md bg-white"
        >
          <img src={GoogleIcons} alt="google-icon" className="h-5 w-5 mr-2" />
          Sign in with Google
        </a>
      </div>

      {/* Facebook Button */}
      <div>
        <a
          href="#"
          className="flex items-center justify-center w-full py-3 border border-[#2d5c98] rounded-md bg-[#2d5c98] text-white text-[18px] font-medium"
        >
          <img
            src={FacebookIcons}
            alt="facebook-icon"
            className="h-5 w-5 mr-2"
          />
          Sign in with Facebook
        </a>
      </div>
    </>
  );
}
