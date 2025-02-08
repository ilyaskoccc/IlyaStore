import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import FooterLayout from "../layout/FooterLayout";

function Footer() {
  return (
    <FooterLayout>
      <div className="flex justify-between items-center h-36 w-[1050px]">
        <div className="flex flex-col">
          <h3 className="font-bold text-[24px]">
            Consulting Agency For Your Business
          </h3>
          <p className="font-normal text-[14px]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div className="flex justify-center w-[236px] h-[52px]">
          <span className="w-40 h-[52px] rounded-xl text-center flex justify-center items-center bg-[#23A6F0]">
            Button
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center h-72 w-[1050px]">
        <div className="flex flex-col">
          <h5 className="font-bold text-[16px]">Company Info</h5>
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/">About Us</Link>
            <Link to="/">Carrier</Link>
            <Link to="/">We are hiring</Link>
            <Link to="/">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-[16px]">Legal</h5>
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/">About Us</Link>
            <Link to="/">Carrier</Link>
            <Link to="/">We are hiring</Link>
            <Link to="/">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-[16px]">Features</h5>
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/">Business Marketing</Link>
            <Link to="/">User Analytic</Link>
            <Link to="/">Live Chat</Link>
            <Link to="/">Unlimited Support</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-[16px]">Resources</h5>
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/">IOS & Android</Link>
            <Link to="/">Watch a Demo</Link>
            <Link to="/">Customers</Link>
            <Link to="/">API</Link>
          </div>
        </div>
        <div className="flex flex-col w-[321px]">
          <h5 className="font-bold text-[16px]">Get In Touch</h5>
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex gap-2">
              <Phone />
              <h6 className="font-bold text-[14px]">(480) 555-0103</h6>
            </div>
            <div className="flex gap-2">
              <MapPin />
              <h6 className="font-bold text-[14px] w-[239px]">
                4517 Washington Ave.
              </h6>
            </div>
            <div className="flex gap-2">
              <Mail />
              <h6 className="font-bold text-[14px]">debra.holt@example.com</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-20 w-[1050px]">
        <div className="font-bold text-[14px]">
          Made With Love By Finland All Right Reserved
        </div>
        <div className="flex justify-center gap-4 w-[236px] h-6">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-[#23A6F0] text-[23px]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-[#23A6F0] text-[23px]"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#23A6F0] text-[23px]"
          />
        </div>
      </div>
    </FooterLayout>
  );
}

export default Footer;
