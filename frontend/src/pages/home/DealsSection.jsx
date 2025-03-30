import dealsImg from '../../assets/deals1.png'

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" className='w-[300px]'/>
      </div>

      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals Of This Month</h4>
        <p>
          Our Men's Fashion Deals of the Month are here to make your style dreams
          a reality withought breaking the bank. Discover a curated collection
          of exquisite clothing, accessories, and footware, all handpicked to add class to your wardrobe.
        </p>

        {/* <div className="deals__countdown flex-wrap">
            <div className="deals__countdown__card">
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className="deals__countdown__card">
                <h4>10</h4>
                <p>Hours</p>
            </div>
            <div className="deals__countdown__card">
                <h4>30</h4>
                <p>Mins</p>
            </div>
            <div className="deals__countdown__card">
                <h4>1</h4>
                <p>Sec</p>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default DealsSection;
