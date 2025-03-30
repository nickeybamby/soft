import { useState } from "react";
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

const Agbada = () => {
    const [index, setIndex] = useState(-1);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Agbada</h2>
        <p className="section__subheader">
          <strong>Crafted for Kings:</strong> Experience the perfect blend of tradition and luxury with our exquisitely tailored Agbada. Designed for the modern gentleman who values culture, class, and confidence.
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
    </>
  )
}

export default Agbada