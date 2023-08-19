import './BestAudio.css'

//images
import BestImages from '../../assets/best-audio-img.png'

const BestAudio = () => {
  return (
    <div className='best container'>
    <div className="best__left">
        <h1 className="best__left__title">
        Bringing you the <span>best</span> audio gear
        </h1>
        <p className="best__left__text">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
    </div>
    <div className="best__right">
        <img src={BestImages} width={400} height={400} alt="" />
    </div>
    </div>
  )
}

export default BestAudio