//Components
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
//CSS
import './Speakers.css'

//Components
import ModelInfo from '../../components/modelInfo/ModelInfo'
//Images
import SpeakersImg1 from '../../assets/speakers-1.png'
import SpeakersImg2 from '../../assets/speakers-2.png'

const Speakers = () => {
  const SpeakersData = [
    {id:1,
      flex: 'row',
     titleTop:"NEW PRODUCT", 
     text: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.", 
     title:`ZX9
     SPEAKER`,
    img:SpeakersImg1,
    link:"speakers1"},
    {id:2,
    flex: 'row-reverse',
    titleTop:"", text: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.", 
    title:`ZX7
    SPEAKER`,
    img:SpeakersImg2,
    link:"speakers2"},
  ]

  return (
    <div>
      <section className="intro">
        <div className="container">
        <h1 className="intro-title">
        SPEAKERS
        </h1>
        </div>
      </section>
      <ModelInfo data={SpeakersData}/>
      <CategoryCards/>
      <BestAudio/>
    </div>
  )
}

export default Speakers