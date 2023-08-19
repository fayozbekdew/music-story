import './Button.css'

const Button = ({bacColor, color}) => {
  return (
    <div style={{background: `${bacColor}`, color: `${color}`}} className='button-primary'>
        <h6>See Product</h6>
    </div>
  )
}

export default Button