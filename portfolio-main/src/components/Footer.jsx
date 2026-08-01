import { NAME } from "../constants";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="py-1 border-t border-neutral-900">
        <div className="text-center">
          <p className="my-2 text-sm text-gray-400">© {year} {NAME}. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
