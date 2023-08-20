//Components
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
import ElementInfo from '../../components/elementInfo/ElementInfo'
import FavoriteProduct from '../../components/favoriteProduct/FavoriteProduct'
import ProductImage from '../../components/productImage/ProductImage'

//images
import HeadPhones2Img from '../../assets/headPhones-2.png'
import HeadPHonesProductImg1 from '../../assets/HeadpgonesProductImg1.png'
import HeadPHonesProductImg2 from '../../assets/HeadpgonesProductImg2.png'
import HeadPHonesProductImg3 from '../../assets/HeadpgonesProductImg3.png'

const HeadPhones2 = () => {

  const HeadPhones2Data = [
    {id:2, text:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.", title:`XX99 Mark I
    Headphones`, price: "$ 1,750", img:HeadPhones2Img}
  ]
  return (
    <div className='container'>
     <ElementInfo data={HeadPhones2Data} />
     <div className="features">
      <div className="features__left">
        <h1 className="features__left__title">
        FEATURES
        </h1>
        <p>
        As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
<br /><br />
From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
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
     <ProductImage img1={HeadPHonesProductImg1} img2={HeadPHonesProductImg2} img3={HeadPHonesProductImg3}/>
    <FavoriteProduct/>
    <CategoryCards/>
    <BestAudio/>
    </div>
  )
}

export default HeadPhones2