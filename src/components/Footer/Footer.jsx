import { FaTwitter,FaSquareFacebook,FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="footer footer-center p-10 bg-black text-base-content rounded mt-16">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover">Terms of Use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav className="gap-4 text-white">
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Find US</a> 
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a><FaTwitter className="text-sky-400"></FaTwitter></a> 
          <a><FaYoutube className="text-rose-600"></FaYoutube></a>
          <a><FaSquareFacebook className="text-slate-100"></FaSquareFacebook></a> 
          <a><FaInstagram className="text-red-600"></FaInstagram></a>
        </div>
      </nav> 
      <aside>
        <p className="text-white">Copyright © 2023 - All right reserved by Tech Fusion X</p>
      </aside>
    </footer>
    );
};

export default Footer;