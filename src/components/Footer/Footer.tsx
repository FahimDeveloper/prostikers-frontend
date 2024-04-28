import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import footerLogo from "../../assets/images/footer-logo.png";
import TermsCondition from "../TermsCondition";
import PrivacyPolicy from "../PrivacyPolicy";
import Container from "../Container";
import { PiTiktokLogoLight } from "react-icons/pi";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #07133C, rgb(0, 0, 0)), url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="md:py-14 py-12"
    >
      <Container>
        <div className="md:space-y-20 space-y-10">
          <div className="text-white w-full md:hidden block space-y-4">
            <img
              src={footerLogo}
              loading="lazy"
              alt="logo"
              className="w-28 h-auto object-contain"
            />
            <p className="text-sm leading-5 text-justify">
              The only indoor sports facility and training center in Sacramento
              CA, specializing in Baseball, Softball, Futsal and Cricket. Book
              now for an action-packed fun and learning.
            </p>
          </div>
          <div className="text-center space-y-8">
            <h2 className="text-white capitalize md:text-5xl text-3xl">
              unlock your full potential
            </h2>
            <nav>
              <ul className="list-none flex md:flex-nowrap flex-wrap justify-center text-lg font-medium items-center md:gap-7 gap-3">
                <li>
                  <Link to="/rental" className="no-underline text-white px-1">
                    Rental
                  </Link>
                </li>
                <li>
                  <Link
                    to="/membership"
                    className="no-underline text-white px-1"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link to="/academy" className="no-underline text-white px-1">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/tten-league"
                    className="no-underline text-white px-1"
                  >
                    League
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="no-underline text-white px-1">
                    Shop
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="btn btn-info capitalize px-10 text-lg">
              get started
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-white w-80 space-y-4 hidden md:block">
              <img
                loading="lazy"
                src={footerLogo}
                alt="logo"
                className="w-28 h-auto object-contain"
              />
              <p className="text-sm leading-5">
                The only indoor sports facility and training center in
                Sacramento CA, specializing in Baseball, Softball, Soccer and
                Cricket. Book now for an action-packed fun and learning.
              </p>
              <div className="flex items-center gap-3">
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100087607805111"
                >
                  <FiFacebook className="size-6" />
                </a>
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.instagram.com/pro_strikers_sacramento/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                >
                  <FaInstagram className="size-6" />
                </a>
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.tiktok.com/@prostrikers"
                >
                  <PiTiktokLogoLight className="size-6" />
                </a>
              </div>
            </div>
            <div className="sm:flex items-end sm:gap-10 space-y-5">
              <ul className="list-none space-y-2">
                <li className="text-white font-medium text-lg">Support</li>
                <Link to="/about" className="no-underline block">
                  <li className="text-[#7C7C7C]">About</li>
                </Link>
                <Link to="/contact" className="no-underline block">
                  <li className="text-[#7C7C7C]">Contact us</li>
                </Link>
              </ul>
              <ul className="list-none space-y-2">
                <li className="text-white font-medium text-lg">Legal</li>
                <TermsCondition>
                  <li className="text-[#7C7C7C] cursor-pointer">
                    Terms of service
                  </li>
                </TermsCondition>
                <PrivacyPolicy>
                  <li className="text-[#7C7C7C] cursor-pointer">
                    Privacy policy
                  </li>
                </PrivacyPolicy>
              </ul>
              <ul className="list-none space-y-2">
                <li className="text-white font-medium text-lg">Partnership</li>
                <Link to="/franchise" className="no-underline block">
                  <li className="text-[#7C7C7C]">Franchise with Us</li>
                </Link>
                <Link to="/affiliate" className="no-underline block">
                  <li className="text-[#7C7C7C]">Affiliation</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
