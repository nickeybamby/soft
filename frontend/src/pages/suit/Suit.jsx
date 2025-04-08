import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from "./data";
import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";
import Accordian from "../../components/accordian/Accordian";

const Suit = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="section__container bg-primary-light">
          <h2 className="section__header capitalize">Suits</h2>
          <p className="section__subheader">
            <strong>Timeless Elegance, Perfect Fit:</strong> Our expertly
            crafted suits, tailored to perfection for every occasion. From
            classic cuts to modern styles, we ensure sophistication and comfort
            in every stitch.
          </p>
        </section>

        <section className="section__container">
          <Images
            data={slides}
            onClick={(currentIndex) => setIndex(currentIndex)}
          />

          <Lightbox
            plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
            captions={{
              showToggle: true,
            }}
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={slides}
            styles={{
              title: {
                maxWidth: "100%", // Apply max-width to the slide title
              },
            }}
          />
        </section>

        <Accordian />
      </motion.div>
    </>
  );
};

export default Suit;
