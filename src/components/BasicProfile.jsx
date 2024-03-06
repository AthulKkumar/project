import tickWhite from "../assets/svg/tickWhite.svg";
import plus from "../assets/svg/plus.svg";
import edit from "../assets/svg/editIcon.svg";
const BasicProfile = () => {
  return (
    <div>
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col">Basic Details</h3>
        <button
          type="button"
          className="col btn d-flex justify-content-center align-items-center gap-2  "
          style={{
            color: "white",
            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
            border: "none",
            padding: "0px",
            maxWidth: "250px",
          }}
        >
          Digilocker Connected{" "}
          <img src={plus} alt="add" width={20} height={20} />
          {/* <img src={tickWhite} alt="verified" width={20} height={20} /> */}
        </button>
      </div>
      <form
        className="pt-4 d-flex gap-4 flex-column"
        style={{ color: "#8F8F8F", fontSize: "18px" }}
      >
        <div className="form-row d-flex gap-4 ">
          <div
            className="form-group col-6"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control  "
              id="fullname"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            />
            <span>
              <img
                src={edit}
                alt="editicon"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  zIndex: "10",
                  width: "20px",
                }}
              />
            </span>
          </div>
          <div
            className="form-group col-6 "
            style={{ position: "relative", zIndex: 1 }}
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control "
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              id="username"
            />{" "}
            <span>
              <img
                src={edit}
                alt="editicon"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  zIndex: "10",
                  width: "20px",
                }}
              />
            </span>
          </div>
        </div>
        <div className="form-row d-flex gap-4">
          <div className="form-group col-6">
            <label htmlFor="date">Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="form-row d-flex gap-4">
          <div
            className="form-group col-6 "
            style={{ position: "relative", zIndex: 1 }}
          >
            <label htmlFor="phone">Mobile</label>
            <input
              type="tel"
              className="form-control  "
              id="mobile"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            />
            <span>
              <img
                src={edit}
                alt="editicon"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  zIndex: "10",
                  width: "20px",
                }}
              />
            </span>
          </div>
          <div
            className="form-group col-6"
            style={{ position: "relative", zIndex: 1 }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control "
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              id="email"
            />{" "}
            <span>
              <img
                src={edit}
                alt="editicon"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  zIndex: "10",
                  width: "20px",
                }}
              />
            </span>
          </div>
        </div>

        <div className="form-row " style={{ width: "100%" }}>
          <div className="form-group  ">
            <label htmlFor="summary">Summary</label>
            <textarea
              className="form-control  "
              id="summary"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
                width: "100%",
                minHeight: "150px",
              }}
              placeholder="You can generate a profile summary using AI from your experiences. Add Experiences like works and other accomplishments to activate this field."
            />
          </div>
        </div>
        <div className="row  ">
          <div className="col-6">
            <div className="row px-2"> Social media links</div>
            <button
              className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
              style={{
                color: "white",

                background:
                  "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                border: "none",

                maxWidth: "250px",
                fontSize: "14px",
              }}
            >
              Add Social Media Profiles{" "}
              <img src={plus} alt="add" width={15} height={15} />
            </button>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicProfile;
