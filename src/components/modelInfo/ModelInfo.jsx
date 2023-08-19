import "./ModelInfo.css";
import Button from "../button/Button";

const ModelInfo = ({ data }) => {
  return (
    <ul>
      {data.map((card) => {
        return (
          <div key={card.id} className="container ">
            <div style={{flexDirection: `${card.flex}`}} className="model">
              <div className="model__left">
                <img src={card.img}  alt="" />
              </div>
              <div className="model__right">
                <h3 className="model__right__top">{card.titleTop}</h3>
                <h1 className="model__right__title">{card.title}</h1>
                <p className="model__right__text">
                  {card.text}
                </p>
                <Button link={card.link} bacColor={"#d87d4a"} />
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default ModelInfo;
