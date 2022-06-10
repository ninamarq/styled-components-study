import Grid from "./Grid";
import GridBlock from "./GridBlock";
import Egg from "../assets/sunnyside-agency-/images/desktop/image-transform.jpg";
import Cup from "../assets/sunnyside-agency-/images/desktop/image-stand-out.jpg";
import Fruit from "../assets/sunnyside-agency-/images/desktop/image-graphic-design.jpg";
import Tangerina from "../assets/sunnyside-agency-/images/desktop/image-photography.jpg";

function SixBlocks() {
  return (
    <Grid columns={2} rows={3}>
      <GridBlock
        type="only-text"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
      />
      <GridBlock
        type="only-image"
        image={ Egg }
        alt="Egg"
      />
      <GridBlock
        type="only-image"
        image={ Cup }
        alt="Egg"
      />
      <GridBlock
        type="only-text"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers,
        videographers and copywriters, we'll build and extend your brand in digital
        places."
      />
      <GridBlock
        type="text-image"
        title="Graphic Designer"
        text="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potencial clients' attention."
        image={ Fruit }
        alt="Fruit"
      />
      <GridBlock
        type="text-image"
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos
        that improve your business image."
        image={ Tangerina }
        alt="Tangerina"
      />
    </Grid>
  );
}

export default SixBlocks;
