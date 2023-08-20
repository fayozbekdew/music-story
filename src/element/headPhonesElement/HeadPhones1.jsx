//css
import '../css/Element.css'

//Component
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
import ElementInfo from '../../components/elementInfo/ElementInfo'

//images
import HeadPhones1Img from '../../assets/headPhones-1.png'
import FavoriteProduct from '../../components/favoriteProduct/FavoriteProduct'
import ProductImage from '../../components/productImage/ProductImage'
import HeadPHonesProductImg4 from '../../assets/HeadpgonesProductImg4.png'
import HeadPHonesProductImg5 from '../../assets/HeadpgonesProductImg5.png'
import HeadPHonesProductImg6 from '../../assets/HeadpgonesProductImg6.png'

const HeadPhones1 = () => {
  const HeadPhones1Data = [
    {id:1, text:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.", title:`XX99 Mark II
    Headphones`, price: "$ 2,999", img:HeadPhones1Img}
  ]
  
  return (
    <div className='container'>
    <ElementInfo data={HeadPhones1Data} />
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
          <li className="features__right__item">
            <span className="features__right__item__number">1x</span>
            <span className="features__right__item__text">Travel Bag</span>
          </li>
        </ul>
      </div>
    </div>
    <ProductImage img1={HeadPHonesProductImg4} img2={HeadPHonesProductImg5} img3={HeadPHonesProductImg6}/>
    <FavoriteProduct/>
    <CategoryCards/>
    <BestAudio/>
    </div>
  )
}

export default HeadPhones1