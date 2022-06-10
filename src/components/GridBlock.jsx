import styled from "styled-components";

function GridBlock({ type, title, image, alt, text }) {
  const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    
    }
    
    section {
      text-align: left;
      margin: 10%;
      line-height: 180%;
      line-break: break-all;
      width: 50%;

      h1 {
        opacity: 0.9;
        font-size: 3vw;
        line-height: 120%;
      }

      p {
        opacity: 0.8;
        line-height: 120%;
        font-size: 1.5vw;
      }
      
      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-family: 'Fraunces', sans-serif;
        font-size: 1.25vw;
        letter-spacing: 1.2px;

        &:hover {
          border-bottom: 3px solid #FF1;
          cursor: pointer;
          opacity: 0.9;
        }
      }
    }

    @media (max-width: 769px) {
      section {
        h1 {
          font-size: 5vw;
        }

        p {
          font-size: 3vw;
        }

        button {
          font-size: 3vw;
          }
      }
    }
    `;

const TextImg = styled.div`
    background-image: url(${ image });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    section {
      width: 70%;
      margin: 5% 0;
      text-align: center;

      h1 {
        opacity: 0.8;
        font-size: 2.25vw;
      }

      p {
        line-height: 150%;
      }
    }

    @media (max-width: 769px) {
      section {
        h1 {
          font-size: 5vw;
        }

        p {
          font-size: 3vw;
        }
      }
    }
  `;

  const render = () => {
    if (type === "only-image") { return <img src={ image } alt={ alt } /> };
    if (type === "only-text") {
      return (
        <section>
          <h1>{ title }</h1>
          <p>{ text }</p>
          <button>LEARN MORE</button>
        </section>
      );
    };
    if (type === "text-image") {
      return (
        <TextImg>
          <section>
            <h1>{ title }</h1>
            <p>{ text }</p>
          </section>
        </TextImg>
      );
    }
    type === "only-image" && <img src={ image } alt={ alt } />;
  };

  return <Block>{ render() }</Block>;
}

export default GridBlock;
