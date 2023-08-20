import './Productimage.css'


const ProductImage = ( {img1, img2, img3} ) => {
  return (
    <div className='container'>
        <div className="product-images">
            <div className="product-image__left">
                <div className="product-image__left-img1">
                    <img src={img1} alt="" />
                </div>
                <div className="product-image__left-img2">
                <img src={img2} alt="" />
                </div>
            </div>
            <div className="product-image__right">
                <div className="product-image__right-img1">
                <img src={img3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductImage