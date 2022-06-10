import styled from "styled-components";
import orangePicture from "../assets/sunnyside-agency-/images/desktop/image-header.jpg";
import arrowDown from "../assets/sunnyside-agency-/images/icon-arrow-down.svg";

function Orange() {
  const Orange = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #50C0FE;
    overflow: hidden;
    width: 100%;
    height: 100%;
    
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2% 0 -21% 0;
      z-index: 3;

      h1 {
        color: #FFF;
        letter-spacing: .5vw;
        font-size: 2.25vw;
      }
  
      #arrow {
        width: 8%;
        margin: 20% 0 0 0;
      }
    }

    #orange {
      z-index: 1;
      width: 60%;
    }

    @media (max-width: 769px) {
      section {
        margin: 2% 0 -33% 0;

        h1 {
          font-size: 3.5vw;
        }
      }
      #orange {
        z-index: 1;
        width: 100%;
      }
    }
  `;

  return (
    <Orange>
      <section>
        <h1>WE ARE CREATIVES</h1>
        <img src={ arrowDown } alt="arrow down" id="arrow"/>
      </section>
      <img src={ orangePicture } alt="orange fruit" id="orange"/>
    </Orange>
  );
}

export default Orange;
