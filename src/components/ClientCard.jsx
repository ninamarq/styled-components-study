import styled from "styled-components";

function ClientCard({ profile, text, name, task }) {
  const ClientCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5% 0;
    word-break: break-all;

    img {
      border-radius: 50%;
      width: 20%;
      margin: 2% 0;
    }

    p {
      width: 70%;
      line-height: 180%;
      opacity: 0.8;
      text-align: center;
      font-size: 1.25vw;
      margin: 8% 0;
    }

    h2 {
      opacity: 0.9;
      font-size: 1.5vw;
      font-weight: 700;
      margin: 0;
    }

    h4 {
      font-size: 1vw;
      font-weight: 400;
      opacity: 0.6;
      margin: 1% 0 5% 0;
    }

    @media (max-width: 769px) {
      img {
        width: 30%;
      }

    p {
      font-size: 3vw;
    }

    h2 {
      font-size: 4vw;
    }

    h4 {
      font-size: 3vw;
    }
    }
  `;

  return (
    <ClientCard>
      <img src={ profile } alt={ name } />
      <p>{ text }</p>
      <h2>{ name }</h2>
      <h4>{ task }</h4>
    </ClientCard>
  );
}

export default ClientCard;
