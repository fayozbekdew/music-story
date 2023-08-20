//Components
import ElementInfo from '../../components/elementInfo/ElementInfo'
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
import FavoriteProduct from '../../components/favoriteProduct/FavoriteProduct'
import ProductImage from '../../components/productImage/ProductImage'

//images
import Speaker1Img from '../../assets/hero-speaker-1.png'
import SpeakerProduct1 from '../../assets/SpeakerProduct1.png'
import SpeakerProduct2 from '../../assets/SpeakerProduct2.png'
import SpeakerProduct3 from '../../assets/SpeakerProduct3.png'


const Speakers1 = () => {

  const Speaker1Data = [
    {id:1, text:"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.", title:`ZX9
    SPEAKER`, price: "$ 4,500", img:Speaker1Img}
  ]
  return (
    <div className='container'>
    <ElementInfo data={Speaker1Data} />
    <div className="features">
      <div className="features__left">
        <h1 className="features__left__title">
        FEATURES
        </h1>
        <p>
        Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
<br /><br />
Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
        </p>
      </div>
      <div className="features__right">
        <h1 className="features__right__title">
        in the box
        </h1>
        <ul className="features__right__list">
          <li className="features__right__item">
            <span className="features__right__item__number">2x</span>
            <span className="features__right__item__text">Headphone Unit</span>
          </li>
          <li className="features__right__item">
            <span className="features__right__item__number">2x</span>
            <span className="features__right__item__text">Speaker Cloth Panel</span>
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
            <span className="features__right__item__text">10m Optical Cable</span>
          </li>
        </ul>
      </div>
    </div>
    <ProductImage img1={SpeakerProduct1} img2={SpeakerProduct2} img3={SpeakerProduct3}/>
    <FavoriteProduct/>
    <CategoryCards/>
    <BestAudio/>
    </div>
  )
}

export default Speakers1