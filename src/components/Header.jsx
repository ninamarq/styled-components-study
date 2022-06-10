import styled from "styled-components";

function Header() {
  const Header = styled.div`
    padding: 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #50C0FE;
    width: 100%;
    height: 50%;

    h1 {
      color: #FFF;
      margin: 0 1%;
      transition: .5s;
      font-family: 'Dancing Script', cursive;
      font-size: 2vw;

      &:hover {
        cursor: pointer;
        opacity: 0.9;
        transition: .5s;
      }
    }

    div {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

    @media (max-width: 769px) {
      h1 {
        font-size: 5vw;
      }
    }
  `;

  const Link = styled.a`
    width: 8%;
    text-align: center;
    margin: 0 5%;
    transition: .75s;
    color: #FFF;
    padding: 1% 0;
    border-radius: 25px;
    font-size: 1.25vw;

    &:hover {
      cursor: pointer;
      background-color: #FFF;
      color: hsl(212, 27%, 19%);
      opacity: 0.9;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      transition: .75s;
    }

    @media (max-width: 769px) {
      font-size: 2.5vw;
      width: 15%;
      padding: 1.5% 0;
      margin: 0 2%;
    }
  `;

  return (
    <Header>
      <h1>sunny</h1>
      <div>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </div>
    </Header>
  );
}

export default Header;
