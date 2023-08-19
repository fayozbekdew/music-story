//CSS
import './Header.css'

//React
import { Link } from 'react-router-dom'

//React-Router-Dom
import { NavLink } from 'react-router-dom'

//Images
import SiteLogo from '../../assets/SiteLogo.svg'
import ShopButton from '../../assets/shopButton.svg'

const Header = () => {
  return (
    <header className="header">
        <div className="header__container container">
            <Link className="site-logo" to="/">
                <img src={SiteLogo} className='site-logo__image' alt="" width="143" height="25" />
            </Link>
            <nav className="sitenav">
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
    </header>
  )
}

export default Header