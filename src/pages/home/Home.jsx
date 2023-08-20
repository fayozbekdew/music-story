//Component
import BestAudio from '../../components/bestaudio/BestAudio'
import Button from '../../components/button/Button'
import CategoryCards from '../../components/categoryCards/CategoryCards'

//css
import './Home.css'

//images

const Home = () => {

  


  return (
    <div>
    <section className="hero">
      <div className="container hero__container">
      <div className="hero__left">
        <h3 className="hero__left__top">
        NEW PRODUCT
        </h3>
        <h1 className="hero__left__title">
        XX99 Mark II
HeadphoneS
        </h1>
        <p className="hero__left__text">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Button  bacColor={'#d87d4a'}/>
      </div>
      <div className="hero__right">
        
      </div>
      </div>
    </section>
    <CategoryCards/>
    <section className="speaker">
      <div className="container speaker__container">
      <div className="speaker__left">
        
      </div>
      <div className="speaker__right">
        <h1 className="speaker__right__title">
        ZX9
SPEAKER
        </h1>
        <p className="speaker__right__text">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <Button bacColor={'#000'} />
      </div>
      </div>
    </section>
    <section className="speaker2">
      <div className="container speaker2__container">
      <div className="speaker2__left">
        <h1 className="speaker2__left__title">
        ZX7 SPEAKER
        </h1>
        <Button bacColor={'#dfdfdf'} color={'#000'} />
      </div>
      </div>
    </section>
    <section className="earphone container">
      <div className="earphone__left">

      </div>
      <div className="earphone__right">
        <h1 className="earphone__right__title">
        YX1 EARPHONES
        </h1>
        <Button bacColor={'#dfdfdf'} color={'#000'} />
      </div>
    </section>

    <BestAudio/>
    </div>
  )
}

export default Home