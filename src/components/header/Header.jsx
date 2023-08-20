//CSS
import './Header.css'

//React
import { Link } from 'react-router-dom'
import { useState } from 'react'

//React-Router-Dom
import { NavLink } from 'react-router-dom'

//Images
import BurgerBtn from '../../assets/burger-btn.png'
import SiteLogo from '../../assets/SiteLogo.svg'
import ShopButton from '../../assets/shopButton.svg'
import shopImg1 from '../../assets/headPhones-1.png'

const Header = () => {

    const [shop, setShop] = useState(false)
    const [menu, setMenu ] = useState(false)
   
    const handleClick = (e) => {
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('header__btn__img')){
                console.log(e.target.classList)
                setShop(true)
            }
            else{
                setShop(false)
            }
            if(e.target.classList.contains('burger-img')){
                
                setMenu(true)
            }
            else{
                setMenu(false)
            }
            
        })
    }

  return (
    <header onClick={() => handleClick()}  className="header">
        <div className={`${menu ? 'show' : 'hidden'} burger-menu `}>
        <ul className="burger-menu-list">
                    <li className="sitenav__item">
                        <NavLink to='/' className="sitenav__link">Home</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/headphones' className="sitenav__link">HeadPhones</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/earphones' className="sitenav__link">AirPhones</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/speakers' className="sitenav__link">Speakers</NavLink>
                    </li>
                </ul>
        </div>
        <div className="header__container container">
            <img className='burger-img' src={BurgerBtn} alt="" />
            <Link className="site-logo" to="/">
                <img src={SiteLogo} className='site-logo__image' alt="" width="143" height="25" />
            </Link>
            <nav className="sitenav__header">
                <ul className="sitenav__list">
                    <li className="sitenav__item">
                        <NavLink to='/' className="sitenav__link">Home</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/headphones' className="sitenav__link">HeadPhones</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/earphones' className="sitenav__link">AirPhones</NavLink>
                    </li>
                    <li className="sitenav__item">
                        <NavLink to='/speakers' className="sitenav__link">Speakers</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='header__btn'>
                <img className='header__btn__img' src={ShopButton} alt="" />
            </div>
        </div>
        <div className={`${shop ? 'show' : 'hidden'} shop-list`}>
            <div className="shop-list-top">
                <h2 className="shop-list-top-title">
                card
                </h2>
                <p>
                Remove all
                </p>
            </div>
            <ul className="shop-list-element">
                <li className="shop-list-item">
                    <div className="shop-list-item-images">
                        <img src='' alt="" />
                    </div>
                    <div className="shop-list-item-info">
                        <h6 className="shop-list-item-info-title">
                        XX99 MK II
                        </h6>
                        <p className="shop-list-item-info-text">
                        $ 2,999
                        </p>
                    </div>
                    <div className="shop-list-btn">
                        <p>1</p>
                    </div>
                </li>
                <li className="shop-list-item">
                    <div className="shop-list-item-images">
                        <img src='' alt="" />
                    </div>
                    <div className="shop-list-item-info">
                        <h6 className="shop-list-item-info-title">
                        XX99 MK II
                        </h6>
                        <p className="shop-list-item-info-text">
                        $ 2,999
                        </p>
                    </div>
                    <div className="shop-list-btn">
                        <p>1</p>
                    </div>
                </li>
                <li className="shop-list-item">
                    <div className="shop-list-item-images">
                        <img src='' alt="" />
                    </div>
                    <div className="shop-list-item-info">
                        <h6 className="shop-list-item-info-title">
                        XX99 MK II
                        </h6>
                        <p className="shop-list-item-info-text">
                        $ 2,999
                        </p>
                    </div>
                    <div className="shop-list-btn">
                        <p>1</p>
                    </div>
                </li>
                
            </ul>
            <div className="shop-list-price">
                <h3 className="shop-list-price-title">
                TOTAL
                </h3>
                <p className="shop-list-price-text">$ 5,396</p>
            </div>
            <div className="shop-list-checkout">
                <p>checkout</p>
            </div>
        </div>
    </header>
  )
}

export default Header