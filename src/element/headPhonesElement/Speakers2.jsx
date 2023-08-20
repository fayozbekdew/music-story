//components
import ElementInfo from "../../components/elementInfo/ElementInfo";
import BestAudio from "../../components/bestaudio/BestAudio";
import CategoryCards from "../../components/categoryCards/CategoryCards";
import FavoriteProduct from "../../components/favoriteProduct/FavoriteProduct";
import ProductImage from "../../components/productImage/ProductImage";

//images
import Speaker2Img from "../../assets/speakers-2.png";
import SpeakerProductimg4 from "../../assets/SpeakerProduct4.png";
import SpeakerProductimg5 from "../../assets/SpeakerProduct5.png";
import SpeakerProductimg6 from "../../assets/SpeakerProduct6.png";

const Speakers2 = () => {
  const Speaker2Data = [
    {
      id: 2,
      text: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      title: `ZX7
    SPEAKER`,
      price: "$ 3,500",
      img: Speaker2Img,
    },
  ];
  return (
    <div className="container">
      <ElementInfo data={Speaker2Data} />
      <div className="features">
        <div className="features__left">
          <h1 className="features__left__title">FEATURES</h1>
          <p>
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
            <br />
            <br />
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>
        </div>
        <div className="features__right">
          <h1 className="features__right__title">in the box</h1>
          <ul className="features__right__list">
            <li className="features__right__item">
              <span className="features__right__item__number">2x</span>
              <span className="features__right__item__text">
                Headphone Unit
              </span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">2x</span>
              <span className="features__right__item__text">
                Speaker Cloth Panel
              </span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">User Manual</span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">
                3.5mm 7.5m Audio Cable
              </span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">
                7.5m Optical Cable
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ProductImage
        img1={SpeakerProductimg4}
        img2={SpeakerProductimg5}
        img3={SpeakerProductimg6}
      />
      <FavoriteProduct />
      <CategoryCards />
      <BestAudio />
    </div>
  );
};

export default Speakers2;
