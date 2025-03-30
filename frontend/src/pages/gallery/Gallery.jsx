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

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const [visibleImages, setVisibleImages] = useState(12);
  const loadMoreProducts = () => {
    setVisibleImages((prevCount) => prevCount + 8);
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Gallery</h2>
        <p className="section__subheader">
          <strong>Make a Pick:</strong> To request a pattern from our catalogue,
          please send a screenshot of desired pattern to our Whatsapp number on
          the contact page, thank you.
        </p>
      </section>

      <section className="section__container">
        <p className="section__subheader">
          Please note that prices may change without prior notice.
        </p>
        <Images
          data={slides.slice(0, visibleImages)}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />

        {/* load more products btn */}
        <div className="product__btn">
          {visibleImages < slides.length && (
            <button className="btn" onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </div>

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
  );
};

export default Gallery;
