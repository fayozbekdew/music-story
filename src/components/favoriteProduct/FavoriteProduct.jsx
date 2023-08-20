import Button from '../button/Button'
import './FavoriteProduct.css'

//images 
import Img1 from '../../assets/headPhones-1.png'
import Img2 from '../../assets/headPhones-3.png'
import Img3 from '../../assets/speakers-1.png'

const FavoriteProduct = () => {
  return (
    <div className='container'>
        <h1 className='favorite-title'>you may also like</h1>
        <ul className='favorite-product-list'>
            <li className="favorite-product-item">
                <div className="favorite-product-images">
                    <img src={Img1} alt="" />
                </div>
                <div className="favorite-product-info">
                <h1 className='favoorite-product-title'>
                XX99 MARK II
                </h1>
                <Button link={'speakers1'}  bacColor={'#d87d4a'}/> 
                </div>
            </li>
            <li className="favorite-product-item">
                <div className="favorite-product-images">
                    <img src={Img2} alt="" />
                </div>
               <div className="favorite-product-info">
               <h1 className='favoorite-product-title'>
                XX59
                </h1>
                <Button  bacColor={'#d87d4a'}/>
               </div>
            </li>
            <li className="favorite-product-item">
                <div className="favorite-product-images">
                    <img src={Img3} alt="" />
                </div>
                <div className="favorite-product-info">
                <h1 className='favoorite-product-title'>
                ZX9 SPEAKER
                </h1>
                <Button  bacColor={'#d87d4a'}/>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default FavoriteProduct