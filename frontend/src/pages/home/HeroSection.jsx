import { Link } from "react-router-dom";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const cards = [
  {
    id: 1,
    image: card1,
    title: "Suit",
    path: '/suit'
  },
  {
    id: 2,
    image: card2,
    title: "Agbada",
    path: '/agbada'
  },
  {
    id: 3,
    image: card3,
    title: "Senator",
    path: '/senator'
  },
];

const HeroSection = () => {
  return (
    <section className="section__container hero__container">
      {cards.map((card) => (
        <div key={card.id} className="hero__card">
          <img src={card.image} alt={card.title} />
          <div className="hero__content">
            <h4>{card.title}</h4>
            <Link to= {card.path} >Discover More</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
