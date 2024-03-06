import { useState } from "react";
import userImage from "../../assets/svg/userImage.svg";
import BasicProfile from "../../components/BasicProfile";
const Profile = () => {
  const [profileType, setProfileType] = useState("basic");
  return (
    <div className="row">
      <div
        className="col col-4 rounded-4 pt-2"
        style={{ border: "1px solid #1212124D" }}
      >
        <div className="row d-flex flex-column  align-items-center text-center ">
          <img
            src={userImage}
            alt="profile"
            style={{ width: "50%", height: "50%" }}
            className="rounded-circle"
          />
          <h4
            style={{
              fontWeight: "700",

              color: "#12131A",
            }}
          >
            Akshay Kumar
          </h4>
        </div>
        <ul
          style={{
            textTransform: "capitalize",
            color: "#8F8F8F",
            fontWeight: "500",
            fontSize: "20px",
          }}
          className="d-flex flex-column gap-4 pt-4 "
        >
          <li>Basic Profile</li>
          <li>Education</li>
          <li>Work Experience</li>
          <li>Licenses & Certifications</li>
          <li>Skill Repository</li>
          <li>Projects</li>
          <li>other activities</li>
        </ul>
      </div>
      <div className="col col-8 px-4">
        <div className="row">{profileType === "basic" && <BasicProfile />}</div>
      </div>
    </div>
  );
};

export default Profile;
