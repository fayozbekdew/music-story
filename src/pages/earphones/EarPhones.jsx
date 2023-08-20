//components
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
import ModelInfo from '../../components/modelInfo/ModelInfo'
//Images
import EarPhonesImg1  from '../../assets/earphones-1.png'

const EarPhones = () => {

  const EarPhonesData = [
    {id:1,
      flex: 'row',
     titleTop:"NEW PRODUCT", 
     text: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.", 
     title:`YX1 WIRELESS
     EARPHONES`,
    img:EarPhonesImg1,
    link:"earphones1"},
    
  ]
  return (
    <div>
      <section className="intro">
        <div className="container">
        <h1 className="intro-title">
        EARPHONES
        </h1>
        </div>
      </section>
      <ModelInfo data={EarPhonesData}/>
      <CategoryCards/>
      <BestAudio/>
    </div>
  )
}

export default EarPhones