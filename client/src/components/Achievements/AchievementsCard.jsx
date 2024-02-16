import React from "react";
import "./cardstyle.css"
const AchievementsCard = (props) => {
  return (
    <div className="main hover:scale-110 transition-transform ">
  <ul className="cards  ">
    <li className="cards_item ">
      <div className="card ">
        <div className="card_image border-[3px]  border-amber-700 h-48">
          <img src={props.img} alt="mixed vegetable salad in a mason jar." />
         
        </div>
        <div className="card_content h-28">
          <h2 className="card_title">{props.title}</h2>
          {/* <div className="card_text">
            <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
              leafy greens and seasonal vegetables, fresh from the farmer's market.
            </p>
            <hr />
            <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
              of protein for $2 more.
            </p>
          </div> */}
        </div>
      </div>
    </li>

    
  </ul>
</div>
  );
};

export default AchievementsCard;
