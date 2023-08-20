//rrd
import { Link } from "react-router-dom";
//component
import BestAudio from "../../components/bestaudio/BestAudio";
import CategoryCards from "../../components/categoryCards/CategoryCards";
import ElementInfo from "../../components/elementInfo/ElementInfo";
import FavoriteProduct from "../../components/favoriteProduct/FavoriteProduct";
import ProductImage from "../../components/productImage/ProductImage";


//images
import HeadPhones3Img from "../../assets/headPhones-3.png";
import HeadPHonesProductImg7 from '../../assets/HeadpgonesProductImg7.png'
import HeadPHonesProductImg8 from '../../assets/HeadpgonesProductImg8.png'
import HeadPHonesProductImg9 from '../../assets/HeadpgonesProductImg9.png'

const HeadPhones3 = () => {
  const HeadPhones3Data = [
    {
      id: 3,
      text: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      title: `XX59
    Headphones`,
      price: "$ 899",
      img: HeadPhones3Img,
    },
  ];
  return (
    <div className="container">
      <Link className='back-btn' to='/headphones'><h6>Go Back</h6></Link>
      <ElementInfo data={HeadPhones3Data} />
      <div className="features">
      <div className="features__left">
        <h1 className="features__left__title">
        FEATURES
        </h1>
        <p>
        These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
<br /><br />
More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
        </p>
      </div>
      <div className="features__right">
        <h1 className="features__right__title">
        in the box
        </h1>
        <ul className="features__right__list">
          <li className="features__right__item">
            <span className="features__right__item__number">1x</span>
            <span className="features__right__item__text">Headphone Unit</span>
          </li>
          <li className="features__right__item">
            <span className="features__right__item__number">2x</span>
            <span className="features__right__item__text">Replacement Earcups</span>
          </li>
          <li className="features__right__item">
            <span className="features__right__item__number">1x</span>
            <span className="features__right__item__text">User Manual</span>
          </li>
          <li className="features__right__item">
            <span className="features__right__item__number">1x</span>
            <span className="features__right__item__text">3.5mm 5m Audio Cable</span>
          </li>
        </ul>
      </div>
    </div>
      <ProductImage
        img1={HeadPHonesProductImg7}
        img2={HeadPHonesProductImg8}
        img3={HeadPHonesProductImg9}
      />
      <FavoriteProduct />
      <CategoryCards />
      <BestAudio />
    </div>
  );
};

export default HeadPhones3;
