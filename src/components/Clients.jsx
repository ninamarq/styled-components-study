import styled from "styled-components";
import Emily from "../assets/sunnyside-agency-/images/image-emily.jpg";
import Thomas from "../assets/sunnyside-agency-/images/image-thomas.jpg";
import Jennie from "../assets/sunnyside-agency-/images/image-jennie.jpg";
import ClientCard from "./ClientCard";

function Clients() {
  const Clients = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6% 0;

    h1 {
      opacity: 0.5;
      font-size: 1.5vw;
      letter-spacing: 1vw;
    }

    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 80%;
      height: 100%;
      margin: 1% 0;
    }

    @media (max-width: 769px) {
      h1 {
        font-size: 4vw;
      }

      section {
        display: flex;
        flex-direction: column;
      }
    }
  `;

  return (
    <Clients>
      <h1>CLIENT TESTIMONIALS</h1>
      <section>
        <ClientCard
          profile={ Emily }
          text="We put our trust in Sunny and they delivered,
          making sure our need were met and deadlines were always hit."
          name="Emily R."
          task="Marketing Director"
        />
        <ClientCard
          profile={ Thomas }
          text="Sunny's enthusiasm coupled with their keen interest in our brand's
          success made it a satisfying and enjoyable experience."
          name="Thomas S."
          task="Chief Operating Officer"
        />
        <ClientCard
          profile={ Jennie }
          text="Incredible en result! Our sales increased over 400% when we worked with
          Sunny. Highly recommended!"
          name="Jennie F."
          task="Business Owner"
        />
      </section>
    </Clients>
  );
}

export default Clients;
