import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 right-0 left-0 bg-white shadow-md z-50">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/result">Result</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/news">News</Link></li>
              </ul>
            </div>

            <Link to="/" className="normal-case font-bold text-3xl flex items-center">
              Pestiglyph
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-xl">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/result">Result</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
          </div>

          <div className="navbar-end space-x-2">
            <Link to="/register" className="btn h-50 w-50 p-2 rounded hover:bg-green text-lg">Register</Link>
            <Link to="/login" className="btn p-2 rounded hover:bg-green text-lg">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
