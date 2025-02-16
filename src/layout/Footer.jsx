import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-[#252B42] text-white">
      <div className="px-29 py-10 md:px-40 text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center font-bold">
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px]/8">
              Consulting Agency For Your Business
            </h3>
            <p className="font-normal text-[14px]/5 w-45 md:w-full">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex py-10">
            <span className="text-[14px]/[22px] w-40 h-[52px] rounded-xl text-center flex justify-center items-center bg-[#23A6F0]">
              Contact Us
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center font-bold">
          <div className="flex flex-col gap-3 py-5">
            <h5 className="text-[16px]">Company Info</h5>
            <div className="flex flex-col gap-4 pt-3 text-[14px]">
              <Link to="/">About Us</Link>
              <Link to="/">Carrier</Link>
              <Link to="/">We are hiring</Link>
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <h5 className="text-[16px]">Legal</h5>
            <div className="flex flex-col gap-4 pt-3 text-[14px]">
              <Link to="/">About Us</Link>
              <Link to="/">Carrier</Link>
              <Link to="/">We are hiring</Link>
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <h5 className="text-[16px]">Features</h5>
            <div className="flex flex-col gap-4 pt-3 text-[14px]">
              <Link to="/">Business Marketing</Link>
              <Link to="/">User Analytic</Link>
              <Link to="/">Live Chat</Link>
              <Link to="/">Unlimited Support</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <h5 className="text-[16px]">Resources</h5>
            <div className="flex flex-col gap-4 pt-3 text-[14px]">
              <Link to="/">IOS & Android</Link>
              <Link to="/">Watch a Demo</Link>
              <Link to="/">Customers</Link>
              <Link to="/">API</Link>
            </div>
          </div>
          <div className="flex flex-col pb-6 gap-3">
            <h5 className="text-[16px]">Get In Touch</h5>
            <div className="flex flex-col gap-4 pt-3 text-[14px]">
              <div className="flex items-center gap-2">
                <Phone className="text-[#8EC2F2]" />
                <h6 className="font-bold text-[14px]">(480) 555-0103</h6>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#8EC2F2]" />
                <h6 className="font-bold text-[14px] ">4517 Washington Ave.</h6>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-[#8EC2F2]" />
                <h6 className="font-bold text-[14px]">
                  debra.holt@example.com
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-15">
          <div className="font-bold text-[14px]/6 w-50 md:w-full">
            Made With Love By Turkey All Right Reserved
          </div>
          <div className="flex pt-10 gap-4 text-[24px]">
            <span className="text-[#335BF5] md:text-[#23A6F0]">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="text-[#E51F5A] md:text-[#23A6F0]">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="text-[#21A6DF] md:text-[#23A6F0]">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="text-[#E42F08] flex md:hidden items-center">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
