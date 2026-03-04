import {
  faLinkedin,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <div className="w-62.5">
          <h1 className="text-xl font-bold">CS — Ticket System</h1>
          <p>
            CS — Ticket System is a query based website where different types of
            problems are resolved. It is handle by the customer service
            employees to solve any problem a customer face in real time.
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">
            {" "}
            <FontAwesomeIcon icon={faXTwitter} />
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon icon={faSquareFacebook} />
            @CS — Ticket System
          </a>
          <a className="link link-hover">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            support@cst.com
          </a>
        </nav>
      </footer>
      <footer className="bg-black text-white footer sm:footer-horizontal footer-center p-6 ">
        <aside>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
