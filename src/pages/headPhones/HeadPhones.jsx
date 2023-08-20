//Components
import BestAudio from '../../components/bestaudio/BestAudio'
import CategoryCards from '../../components/categoryCards/CategoryCards'
import ModelInfo from '../../components/modelInfo/ModelInfo'
//CSS
import './HeadPhones.css'

//Images
import HeadImg1 from '../../assets/headPhones-1.png'
import HeadImg2 from '../../assets/headPhones-2.png'
import HeadImg3 from '../../assets/headPhones-3.png'

const HeadPhones = () => {
  const headPhonesData = [
    {id:1,
      flex: 'row',
     titleTop:"NEW PRODUCT", 
     text: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.", 
     title:`XX99 Mark II
    Headphones`,
    img:HeadImg1,
    link:"headphones1"},
    {id:2,
    flex: 'row-reverse',
    titleTop:"", text: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.", 
    title:`XX99 Mark I
    Headphones`,
    img:HeadImg2,
    link:"headphones2"},
    {id:3, 
      flex: 'row',
      titleTop:"", 
      text: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.", 
      title:`XX59
      Headphones`,
      img:HeadImg3,
    link:"headphones3"},
  ]

  return (
    <div>
      <section className="intro">
        <div className="container">
        <h1 className="intro-title">
        HEADPHONES
        </h1>
        </div>
      </section>
      <ModelInfo data={headPhonesData}/>
      <CategoryCards/>
      <BestAudio/>
    </div>
  )
}

export default HeadPhones