import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SOCIALS } from "../constants";
import logo from "../assets/J-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0"> 
        {/* logo removed per user request */}
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <FaSquareXTwitter />
        </a>
        <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
