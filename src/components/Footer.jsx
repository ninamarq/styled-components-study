import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";

function Footer() {
  const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8AD2C4;
    padding: 0 0 5% 0;

    h1 {
      opacity: 0.7;
      font-size: 3vw;
      margin: 3% 0;
    }

    #links {
      display: inline;
      width: 100%;
      margin: 0 0 2% 0;
      text-align: center;
      font-size: 1.25vw;

      a {
        opacity: 0.7;
        margin: 0 2%;
        transition: .5s;
        padding: 1% 2%;
        border-radius: 25px;

        &:hover {
          cursor: pointer;
          background-color: #FFF;
          color: hsl(212, 27%, 19%);
          opacity: 0.9;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          transition: .75s;
        }
      }
    }

    #socials {
      display: flex;
      justify-content: space-around;
      width: 15%;
      margin: 3% 0 0 0;
    }

    @media (max-width: 769px) {
      h1 {
        margin: 5% 0;
        font-size: 7vw;
      }

      #links {
        margin: 5% 0;
        font-size: 3.5vw;
      }

      #socials {
        margin: 5% 0;
        width: 50%;
      }
    }
  `;

  const Icons = styled.div`
    svg {
      opacity: 0.7;
      font-size: 1.75vw;

      &:hover {
        cursor: pointer;
        opacity: 1;
        transition: .5s;
      }
    }

    @media (max-width: 769px) {
      svg {
        font-size: 5vw;
      }
    }
  `;

  return (
    <Footer>
      <h1>sunny</h1>
      <section id="links">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </section>
      <section id="socials">
        <Icons>
          <FaFacebookSquare />
        </Icons>
        <Icons>
          <FaInstagram />
        </Icons>
        <Icons>
          <FaTwitter />
        </Icons>
        <Icons>
          <GrPinterest />
        </Icons>
      </section>
    </Footer>
  );
}

export default Footer;
