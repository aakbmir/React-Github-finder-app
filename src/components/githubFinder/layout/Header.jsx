import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import GlobalContext from "./../../../context/GlobalContext";

function Header({ title }) {
  const { dispatch } = useContext(GlobalContext);
  const handleUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link
            to="/"
            onClick={handleUsers}
            className="text-lg font-bold align-middle"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={handleUsers}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={handleUsers}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Github Finder",
};
export default Header;
