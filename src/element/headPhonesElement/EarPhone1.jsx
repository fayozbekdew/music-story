//rrd
import { Link } from "react-router-dom";

//component
import ElementInfo from "../../components/elementInfo/ElementInfo";
import BestAudio from "../../components/bestaudio/BestAudio";
import CategoryCards from "../../components/categoryCards/CategoryCards";
import FavoriteProduct from "../../components/favoriteProduct/FavoriteProduct";
import ProductImage from "../../components/productImage/ProductImage";
//images
import EarPhonesImg from "../../assets/earphones-1.png";
import EarPhoneProduct1 from "../../assets/EarPhoneProductImg1.png";
import EarPhoneProduct2 from "../../assets/EarPhoneProductImg2.png";
import EarPhoneProduct3 from "../../assets/EarPhoneProductImg3.png";

const EarPhone1 = () => {
  const EarphoneData = [
    {
      id: 1,
      text: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      title: `YX1 WIRELESS
    EARPHONES`,
      price: "$ 599",
      img: EarPhonesImg,
    },
  ];
  return (
    <div className="container">
       <Link className='back-btn' to='/earphones'><h6>Go Back</h6></Link>
      <ElementInfo data={EarphoneData} />
      <div className="features">
        <div className="features__left">
          <h1 className="features__left__title">FEATURES</h1>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
            <br />
            <br />
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="features__right">
          <h1 className="features__right__title">in the box</h1>
          <ul className="features__right__list">
            <li className="features__right__item">
              <span className="features__right__item__number">2x</span>
              <span className="features__right__item__text">Earphone Unit</span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">6x</span>
              <span className="features__right__item__text">
                Multi-size Earplugs
              </span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">User Manual</span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">
                USB-C Charging Cable
              </span>
            </li>
            <li className="features__right__item">
              <span className="features__right__item__number">1x</span>
              <span className="features__right__item__text">Travel Pouch</span>
            </li>
          </ul>
        </div>
      </div>
      <ProductImage
        img1={EarPhoneProduct3}
        img2={EarPhoneProduct2}
        img3={EarPhoneProduct1}
      />
      <FavoriteProduct />
      <CategoryCards />
      <BestAudio />
    </div>
  );
};

export default EarPhone1;
