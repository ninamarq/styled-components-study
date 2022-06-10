import Grid from "./Grid";
import GridBlock from "./GridBlock";
import Milk from "../assets/sunnyside-agency-/images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../assets/sunnyside-agency-/images/desktop/image-gallery-orange.jpg";
import Cone from "../assets/sunnyside-agency-/images/desktop/image-gallery-cone.jpg";
import SugarCube from "../assets/sunnyside-agency-/images/desktop/image-gallery-sugarcubes.jpg";

function FourColumns() {
  return (
    <Grid columns={4} rows={1}>
      <GridBlock
        type="only-image"
        image={ Milk }
        alt="Milk"
      />
      <GridBlock
        type="only-image"
        image={ Orange }
        alt="Orange"
      />
      <GridBlock
        type="only-image"
        image={ Cone }
        alt="Cone"
      />
      <GridBlock
        type="only-image"
        image={ SugarCube }
        alt="Sugar cubes"
      />
    </Grid>
  );
}

export default FourColumns;
