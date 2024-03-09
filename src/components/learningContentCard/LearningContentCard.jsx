import React from "react";
import "./learningContentCard.css";

const LearningContentCard = ({ time, content }) => {
  return (
    <div className="learningContentCard">
      <div className="learningContentCard__time">
        <small>{time}</small>
        <div className="learningContentCard__p">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default LearningContentCard;
