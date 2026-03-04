import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="p-2">
      <div className="navbar justify-between bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-bold">Home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Contact</li>
            </ul>
          </div>
          <a className="lg:text-xl text-[14px] font-bold ml-2">
            CS - Ticket System
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 font-normal">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-normal text-white px-4 py-2 rounded-sm flex items-center gap-1">
            <FontAwesomeIcon icon={faPlus} />
            New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
