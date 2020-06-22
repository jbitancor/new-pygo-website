import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Link } from "gatsby";
import Link from 'gatsby-plugin-transition-link';
import { GiHamburgerMenu } from "react-icons/gi";
import pygoIcon from "../images/pygo-clear.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <HeaderWrapper>
      <div className='grid-container'>
        <nav>
          <Link fade to='/'>
            <img src={pygoIcon} className='logo' alt='' />
          </Link>
          <button onClick={() => setOpen(!isOpen)}>
            <GiHamburgerMenu />
          </button>
          <ul className={isOpen ? "open" : "closed"}>
            <li>
              <Link to='/'>Products</Link>
            </li>
            <li>
              <Link to='/'>Industries</Link>
            </li>
            <li>
              <Link to='/'>Case Studies</Link>
            </li>
            <li>
              <Link to='/'>Events</Link>
            </li>
            <li>
              <Link fade to='/about'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 5;
  display: block;
  border-bottom: 1px solid #d8d8d8;

  nav {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    position: relative;

    .logo {
      width: 120px;
      margin-top: 5px;
      transform: scale(1.4);
    }

    @media (max-width: 1260px) {
      .logo {
        margin-top: 5px;
        margin-left: 45px;
        transform: scale(1.25);
      }
    }

    button {
      @media (min-width: 1024px) {
        display: none;
      }
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2rem;
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }

    ul {
      transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      @media (min-width: 1024px) {
        width: 60%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        left: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
      }

      li {
        position: relative;
        font-family: open-sans, sans-serif;
        @media (min-width: 1024px) {
          width: auto;
          list-style-type: none;
          margin: 20px 0;
          margin-left: 5%;
        }
        a {
          color: #4a4a4a;
        }

        a::after {
          content: "";
          width: 0%;
          position: absolute;
          border-bottom: solid 2px #4a4a4a;
          bottom: -5px;
          left: 0;
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }

      li:hover {
        @media (min-width: 1024px) {
          a::after {
            width: 100%;
          }
        }
      }
    }

    .open {
      @media (max-width: 1023px) {
        position: absolute;
        top: 50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: white;
        padding: 30px 60px;
      }
      li {
        list-style-type: none;
        font-size: 1.3rem;
        text-align: left;
        margin: 15px 0;
      }
    }
    .closed {
      @media (max-width: 1023px) {
        position: absolute;
        top: 55px;
        left: -100vw;
        height: 100vh;
        width: 0;

        li {
          opacity: 0;
        }
      }
    }
  }
`;

export default Header;
