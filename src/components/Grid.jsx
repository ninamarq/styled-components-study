import styled from "styled-components";

function Grid({ columns, rows, children }) {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${ columns }, 1fr);
    grid-template-rows: repeat(${ rows }, 1fr);

    @media (max-width: 769px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(${ rows * 2 }, 50vh) repeat(${ rows * 2 }, 1fr);
    }
  `;

  return (
    <Grid>
      { children }
    </Grid>
  );
}

export default Grid;
