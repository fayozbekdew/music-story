import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({bacColor, color, link}) => {
  return (
    <div style={{background: `${bacColor}`, color: `${color}`}} className='button-primary'>
        <Link to={link}>See Product</Link>
    </div>
  )
}

export default Button