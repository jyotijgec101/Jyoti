import React from "react";
import "./cardstyle.css"
const AchievementsCard = (props) => {
  return (
    <div className="main hover:scale-110 transition-transform ">
  <ul className="cards  ">
    <li className="cards_item ">
      <div className="card hover:text-white hover:bg-orange-400">
        <div className="card_image border-[3px]  border-amber-700 h-48">
          <img src={props.img} alt="mixed vegetable salad in a mason jar." />
         
        </div>
        <div className="card_content  hover:text-white hover:bg-orange-400 h-32">
          <h2 className="card_title pacifico-regular">{props.title}</h2>
        </div>
      </div>
    </li>

    
  </ul>
</div>
  );
};

export default AchievementsCard;
