import './Footer.css'

//React-Router-Dom
import { Link, NavLink } from 'react-router-dom'

//Images
import SiteLogo from '../../assets/SiteLogo.svg'
import Facebook from '../../assets/facebook-img.svg'
import Twitter from '../../assets/twitter-img.svg'
import Instagram from '../../assets/instagram-img.svg'

const Footer = () => {
  return (
    <footer className="header">
    <div className="container">
    <div className="header__container">
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
    </div>
    <div className="footer-info">
        <div className="footer-section-left">
        <p className="footer-info__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <Link className='footer-info__creator' target={'_blank'}  to='https://t.me/fayoz_dev/'>
        Copyright 2021. All Created <span>Fayoz</span>
        </Link>
        </div>
        <div className="footer-section-right">
        <span className="footer-section-right__container">
        <Link target={'_blank'} to='https://instagram.com'>
            <img src={Instagram} width='24' height={24} alt="instagram img" />
        </Link>
        <Link target={'_blank'} to='https://web.telegram.org/a/'>
            <img src={Facebook}  width='24' height={24} alt="telegram img" />
        </Link>
        <Link target={'_blank'} to='https://twitter.com/?lang=ru'>
            <img src={Twitter} width='24' height={24} alt="twitter img" />
        </Link>
        </span>
        </div>
    </div>
    </div>
</footer>
  )
}

export default Footer