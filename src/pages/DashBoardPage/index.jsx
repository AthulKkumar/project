import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./dashboard.css";
import { CiSearch } from "react-icons/ci";
import {
  IoMdArrowForward,
  IoMdAdd,
  IoIosArrowForward,
  IoIosAdd,
} from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaMedal } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import ProgressCard from "../../components/progressCard/ProgressCard";
import thumbnail from "../../assets/thumbnail.webp";
import DashboardFooterCard from "../../components/dashboardFooterCard/DashBoardFooterCard";
import youtube from "../../assets/Youtube.png";
import linkedin from "../../assets/Linkedin.png";
import coursera from "../../assets/Coursera.png";
import udemy from "../../assets/Udemy.png";
import calender from "../../assets/calender.png";
import DashboardNotification from "../../components/dashboardNotification/DashBoardNotification";

const DashBoard = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleClick = () => {
    setShow(true);
    if (show == true) {
      setShow(false);
    }
  };

  const notificationShow = () => {
    setNotification(true);
    if (notification == true) {
      setNotification(false);
    }
  };

  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__section1">
        <div className="dashboard__container1">
          {/* <div className="dashboard__input">
            <CiSearch />
            <input type="text" placeholder="search..." />
          </div> */}
          <div className="dashboard__header">
            <h1>Welcome back, Name!</h1>
            <p>You can now your YouTube Playlists into Courses</p>
            <button>
              Explore Now <IoMdArrowForward />
            </button>
          </div>
        </div>

        <div className="dashboard__container2">
          <h4>Course In-Progress</h4>
          <div className="dashboard__container2_progress">
            <ProgressCard
              img={thumbnail}
              title={"Interaction Design"}
              progress={62}
            />
            <ProgressCard
              img={thumbnail}
              title={"UI/UX Design"}
              progress={79}
            />
            <ProgressCard
              img={thumbnail}
              title={"Adobe Photoshop Masterclass"}
              progress={23}
            />
            <p className="dashboard__container3_seeAll">
              See all <IoIosArrowForward />
            </p>
          </div>
        </div>

        <div className="dashboard__container3">
          <div className="dashboard__container3__wrapper">
            <div className="dashboard__container3_cards">
              <DashboardFooterCard img={coursera} title={"Coursera"} />
              <DashboardFooterCard img={youtube} title={"Youtube"} />
              <DashboardFooterCard
                img={udemy}
                title={"Udemy"}
                para={`Connect Your Udemy and bring all your learning and certifications`}
              />
              <DashboardFooterCard img={linkedin} title={"Linkedin"} />
            </div>

            <div className="dashbord__container3__dropdown">
              <p>
                Choose from your Favourite <br /> Course Provider
              </p>
              <div class="dashbord__container3__dropdownMenu">
                <select name="" id="cars">
                  <option value="">Select</option>
                  <option value="">#</option>
                  <option value="">#</option>
                  <option value="">#</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__seciton2">
        <div className="dashboard__section2_warpper">
          {/* <div className="dashboard__section2_header">
            <IoMdAdd
              fontSize={30}
              className="dashboard__section2__add"
              onClick={handleClick}
            />
            <FaBell fontSize={30} onClick={notificationShow} />
            <CgProfile fontSize={30} />
          </div>

          {show && (
            <div className="dashboard__section2_popover">
              <ul>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add New Learnings
                </li>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add Education
                </li>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add Experience
                </li>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add Credentials
                </li>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add Project
                </li>
                <li>
                  <IoIosAdd className="dashboard__section2_popover_svg" />
                  Add Activity
                </li>
              </ul>
            </div>
          )}

          {notification && (
            <div className="dashboardToogleNotification">
              <DashboardNotification />{" "}
            </div>
          )} */}

          <div className="dashboard__section2__skill">
            <h4>Skill Badges</h4>
            <div className="dashboard__seciton2_role_wrapper">
              <div className="dashboard__seciton2_role_wrapper_interest">
                <div className="dashboard__section2__role">
                  <FaMedal fontSize={30} />
                  <p>22</p>
                </div>
                <p>Role Based</p>
              </div>
              <div className="dashboard__seciton2_role_wrapper_interest">
                <div className="dashboard__section2__role">
                  <FaMedal fontSize={30} />
                  <p>5</p>
                </div>
                <p>Interest Based</p>
              </div>
            </div>
          </div>

          <div className="dashboard__section2_learningGoal">
            <div>
              <div class="progress-bar">
                <p className="dashboare__section2_val">41%</p>
                <progress
                  value="41%"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: 0, width: 0 }}
                >
                  41
                </progress>
              </div>
            </div>

            <div className="dashboard__section2_text">
              <h4>Learning Goal</h4>
              <p>23/60 hours</p>
            </div>
          </div>

          <div className="dashboard__section2_active">
            <h4>Learning Activities</h4>
            <img src={calender} alt="" width={"100%"} height={"300px"} />
          </div>

          <div className="dashboard__section2_performance">
            <div>
              <h4>MoM Peerformance</h4>
              <p>
                <FaArrowTrendUp />
                23
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
