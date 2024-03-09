import React from "react";
import "./learning.css";
import { FaCheck } from "react-icons/fa6";
import LearningCard from "../../components/learningCard/LearningCard";
import PipelineCard from "../../components/pipelineCard/PipelineCard";

const Learning = () => {
  return (
    <div className="learning__wrapper">
      <div className="learning__section">
        <h4>My Language</h4>
        <div className="learning__card_section">
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
        </div>
      </div>

      <div className="learning__section2">
        <div className="learning__section2__button">
          <button>Add New Learnings +</button>
        </div>
        <div className="learing__section2_learningGoal">
          <div class="progress-bar">
            <p>41%</p>
            <progress
              value="75"
              min="0"
              max="100"
              style={{ visibility: "hidden", height: 0, width: 0 }}
            >
              75%
            </progress>
          </div>

          <div className="searning__section2_goal">
            <h4>Monthly Learning Goal</h4>
            <small>
              Set the target and accomplish by tracking in real time
            </small>
            <p>23/60 hours</p>
          </div>
        </div>

        <div className="learning__pipeline">
          <h4>Pipeline</h4>
          <div className="learning__card">
            <PipelineCard />
            <PipelineCard />
            <PipelineCard />
          </div>
        </div>

        <div className="learning__completed">
          <h4>
            Completed <FaCheck />
          </h4>
          <PipelineCard />
        </div>
      </div>
    </div>
  );
};

export default Learning;
