import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav = styled.nav`
  background-color: crimson;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  .link,
  button {
    text-decoration: none;

    color: white;
    font-size: 20px;
  }

  button {
  }
`;

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}

        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/about"}>
          About
        </Link>
        <Link className="link" to={"/books"}>
          Books
        </Link>
        {token ? (
          <button>
            <Link to={"/logout"}>Logout</Link>
          </button>
        ) : (
          <button>
            <Link to={"login"}>Login</Link>
          </button>
        )}
      </Nav>
    </>
  );
};
