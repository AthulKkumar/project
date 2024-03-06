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
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("basic")}
          >
            Basic Profile
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("education")}
          >
            Education
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("work")}
          >
            Work Experience
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("license")}
          >
            Licenses & Certifications
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("skill")}
          >
            Skill Repository
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("project")}
          >
            Projects
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("other")}
          >
            other activities
          </li>
        </ul>
      </div>
      <div className="col col-8 px-4">
        <div className="row">{profileType === "basic" && <BasicProfile />}</div>
      </div>
    </div>
  );
};

export default Profile;
