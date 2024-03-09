import React from "react";
import "./pipelineCard.css";
import thumbnail from "../../assets/thumbnail.webp";

const PipelineCard = () => {
  return (
    <div className="pipelineCard">
      <div className="pipelineCard__img">
        <img src={thumbnail} alt="" width={"150px"} />
      </div>
      <div className="pipelineCard__text">
        <h6>UI/UX Fundamentals</h6>
        <small>Ran Segal</small>
        <p>Udemy</p>
      </div>
    </div>
  );
};

export default PipelineCard;
