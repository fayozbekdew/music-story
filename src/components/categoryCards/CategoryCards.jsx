//React-Router-Dom
import { NavLink } from 'react-router-dom'

//CSS
import './CategoryCards.css'

//Images
import ArrowImg from '../../assets/arrow.svg'
import CategoryHeadPhones from '../../assets/category-headphones.png'
import CategorySpeakers from '../../assets/category-speakers.png'
import CategoryEarphones from '../../assets/category-earphones.png'

const CategoryCards = () => {
    const categoryData = [
        {title: "HEADPHONES", img:CategoryHeadPhones, link: '/headphones'},
        {title: "SPEAKERS", img:CategorySpeakers, link: '/speakers'},
        {title: "EARPHONES", img:CategoryEarphones, link: '/earphones'},
      ]

  return (
    <div className='category container'>
    <ul className='category-cards__list' >
        {categoryData.map((category) => {
            return(
                <li key={category.title} className="category-cards__item">
                <img className='category-cards__item__img' src={category.img} alt="" />
                <div className="category__info">
                <h4 className="category-cards__item__title">
                {category.title}
                </h4>
                <NavLink to={category.link} className="categoty-cards__item__link">
                    <p>Shop</p>
                    <img src={ArrowImg} width={5} height={10} alt="" />
                </NavLink>
                </div>
            </li>
            )
        })}
        {/* <li className="category-cards__item">
            <img className='category-cards__item__img' src="" alt="" />
            <h4 className="category-cards__item__title">
            HEADPHONES
            </h4>
            <NavLink className="categoty-cards__item__link">
                <p>Shop</p>
                <img src="" alt="" />
            </NavLink>
        </li> */}
    </ul>
    </div>
  )
}

export default CategoryCards