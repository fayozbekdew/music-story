import "./ElementInfo.css";

const ElementInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="element">
      {data.map((element) => {
        return (
          <div key={element.id} className="container element-info">
            <div className="element-info__left">
              <img src={element.img} alt="" />
            </div>
            <div className="element-info__right">
              <h1 className="element-info__right__title">{element.title}</h1>
              <p className="element-info__right__text">{element.text}</p>
              <pre className="element-info__right__prince">{element.price}</pre>
              <div className="element-btn">
                <div className="element-info__right__number-btn">
                  <span className="number-btn-counter">-</span>
                  <p>1</p>
                  <span className="number-btn-counter">+</span>
                </div>
                <div className="element-info__right__submit-btn">
                  <h1>ADD TO CART</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ElementInfo;
