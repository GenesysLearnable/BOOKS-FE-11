import React from "react";
import "./MsgF.css";
import searchIcon from "../../Images/Icons/search-icon.svg";
import group1 from "./CommImages/group1.svg";
import group2 from "./CommImages/group2.svg";
import group3 from "./CommImages/group3.svg";
import group4 from "./CommImages/group4.svg";
import profile1 from "./CommImages/profile/profile1.svg";
import profile2 from "./CommImages/profile/profile2.svg";
import greendot from "../../Images/Icons/greendot.png";
import file4 from "./CommImages/Files/file4.svg";
import downloadIcon from "./CommImages/Files/downloadIcon.svg";
import upload1 from "./CommImages/Files/upload1.svg";
import send from "./CommImages/Files/send.svg";

function MsgF() {
  return (
    <div className="positions">
      <div className="Community1-div">
        <div className="Community-plus">
          <h4>Community</h4>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 8.5V16.5M16.5 12.5H8.5M18.5 2.5H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V18.5C2.5 20.7091 4.29086 22.5 6.5 22.5H18.5C20.7091 22.5 22.5 20.7091 22.5 18.5V6.5C22.5 4.29086 20.7091 2.5 18.5 2.5Z"
              stroke="#338933"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
        </div>

        <div className="input-div">
          <img src={searchIcon} alt="icon" className="searchIcon" />
          <input placeholder="Search" />
        </div>
        <hr />
        <div className="group1-section">
          <div>
            <img className="img-sec" src={group1} alt="logo" />
          </div>
          <div className="texts-sec">
            <p className="boldtext-sec">Bioinformatics Gurus</p>
            <h6>what did you say John?</h6>
          </div>
          <p className="timer">09:41 am</p>
        </div>
        <hr />
        <div className="group1-section">
          <div>
            <img className="img-sec" src={group2} alt="logo" />
          </div>
          <div className="texts-sec">
            <p className="boldtext-sec">STEM Diversity </p>
            <h6>What did prof say micheal...</h6>
          </div>
          <p className="timer">09:45 am</p>
        </div>
        <hr />
        <div className="group1-section">
          <div>
            <img className="img-sec" src={group3} alt="logo" />
          </div>
          <div className="texts-sec">
            <p className="boldtext-sec">Ecology</p>
            <h6>what exactly do you mean?</h6>
          </div>
          <p className="timer">09:41 am</p>
        </div>
        <hr />
        <div className="group1-section">
          <div>
            <img className="img-sec" src={group4} alt="logo" />
          </div>
          <div className="texts-sec">
            <p className="boldtext-sec">Microbial Biotechnology </p>
            <h6>Resend the files</h6>
          </div>
          <p className="timer">10:12 am</p>
        </div>
        <hr />
      </div>

      <div className="Community-chat-section">
        <div className="inside-chat">
          <div>
            <img className="img-sec" src={group1} alt="logo" />
          </div>
          <div className="texts-sec">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "130%",
                fontFamily: "EB Garamond",
              }}
            >
              Bioinformatics Gurus
            </p>
            <div
              className="p-text-area"
              style={{ display: "flex", position: "relative" }}
            >
              <p>25 members&nbsp;&nbsp;&nbsp; </p>
              <p style={{ display: "flex", alignItems: "end" }}>
                <img
                  style={{
                    width: "9px",

                    boarderRaduis: "12px",
                    top: "8px",
                  }}
                  src={greendot}
                  alt="continue reading"
                  className="greendot"
                />
                &nbsp;&nbsp; 5 online
              </p>
            </div>
          </div>
          <div className="right-hand-section">
            <div
              style={{ display: "flex", right: "50px", position: "absolute" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20 20.5L18.4 18.9M4 12.1C4 7.90264 7.40263 4.5 11.6 4.5C15.7974 4.5 19.2 7.90264 19.2 12.1C19.2 16.2974 15.7974 19.7 11.6 19.7C7.40263 19.7 4 16.2974 4 12.1Z"
                  stroke="#585F6A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              style={{ display: "flex", right: "20px", position: "absolute" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="13"
                viewBox="0 0 3 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 1.75C2.5 2.44036 1.94036 3 1.25 3C0.559644 3 0 2.44036 0 1.75C0 1.05964 0.559644 0.5 1.25 0.5C1.94036 0.5 2.5 1.05964 2.5 1.75ZM2.5 6.75C2.5 7.44036 1.94036 8 1.25 8C0.559644 8 0 7.44036 0 6.75C0 6.05964 0.559644 5.5 1.25 5.5C1.94036 5.5 2.5 6.05964 2.5 6.75ZM1.25 13C1.94036 13 2.5 12.4404 2.5 11.75C2.5 11.0596 1.94036 10.5 1.25 10.5C0.559644 10.5 0 11.0596 0 11.75C0 12.4404 0.559644 13 1.25 13Z"
                  fill="#28303F"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="text-below"
          style={{ backgroundColor: "rgba(247, 251, 247, 1)" }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "DM Sans",
              color: "rgba(88, 95, 106, 1)",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Today
          </h3>

          {/* Purity */}
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex" }}>
              <img src={profile1} alt="logo" />
              <p
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(54, 55, 61, 1)",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                  fontFamily: "DM Sans",
                }}
              >
                <b>Purity</b> &nbsp; 09:41 am
              </p>
            </div>
            <div
              style={{ marginTop: "10px", width: "526px", marginLeft: "20px" }}
            >
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "1.6rem",
                  fontWeight: "400",
                  color: "rgba(21, 21, 21, 1)",
                  border: "1px solid rgba(230, 240, 230, 1)",
                  backgroundColor: "#E6F0E6",
                  padding: "1rem",
                  // borderBottomRightRadius: "2rem",
                  borderBottomLeftRadius: "3rem",
                  borderTopRightRadius: "3rem",

                  marginLeft: "30px",
                }}
              >
                Hi there! I noticed you're also interested in bioinformatics and
                microbiology. I'm new to the club and looking to connect with
                others who share similar interests.
              </p>
            </div>
          </div>
          {/* 
           Gerald text */}
          <div
            style={{
              padding: "20px",
              position: "relative",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                right: "2px",
                top: "2px",
              }}
            >
              <p
                style={{
                  color: "rgba(54, 55, 61, 1)",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                  fontFamily: "DM Sans",
                  marginTop: "10px",
                  marginRight: "5px",
                }}
              >
                09:47 am &nbsp; <b>Gerald</b>
              </p>
              <img src={profile2} alt="logo" />
            </div>
            <div
              style={{
                marginRight: "35px",
                marginTop: "35px",
                width: "526px",
                marginLeft: "20px",
                position: "absolute",
                right: "10px",
                top: "2px",
              }}
            >
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "1.6rem",
                  fontWeight: "400",
                  color: "rgba(21, 21, 21, 1)",
                  border: "1px solid rgba(230, 240, 230, 1)",
                  backgroundColor: "#E6F0E6",
                  padding: "1rem",
                  borderBottomRightRadius: "2rem",
                  borderTopLeftRadius: "3rem",
                  marginLeft: "50px",
                }}
              >
                Hey! It's great to meet you. I'm always excited to connect with
                fellow enthusiasts. What specifically drew you to bioinformatics
                and microbiology?
              </p>
            </div>
          </div>

          {/* purity reply */}
          <div style={{ padding: "20px", marginTop: "90px" }}>
            <div style={{ display: "flex" }}>
              <img src={profile1} alt="logo" />
              <p
                style={{
                  marginTop: "10px",
                  color: "rgba(54, 55, 61, 1)",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                  fontFamily: "DM Sans",
                }}
              >
                purity &nbsp; 09:41 am
              </p>
            </div>
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "DM Sans",
                  fontSize: "1.6rem",
                  fontWeight: "400",
                  color: "rgba(21, 21, 21, 1)",
                  border: "1px solid rgba(230, 240, 230, 1)",
                  backgroundColor: "#E6F0E6",
                  padding: "1rem",
                  borderBottomLeftRadius: "3rem",
                  borderTopRightRadius: "3rem",
                  marginLeft: "30px",
                }}
              >
                <div>
                  <img src={file4} alt="logo" />
                </div>

                <p>Virology.pdf</p>
                <div>
                  <img src={downloadIcon} alt="logo" />
                </div>
              </div>
            </div>
          </div>

          {/* Chat-input */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={upload1}
                alt=""
                style={{ width: "30px", marginTop: "5px" }}
              />
            </div>
            <input
              placeholder="Write a message"
              style={{ height: "24px", width: "500px" }}
            />
            <div
              style={{
                backgroundColor: "rgba(0, 77, 0, 1)",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "30px",
              }}
            >
              <img
                src={send}
                alt=""
                style={{
                  marginTop: "15px",
                  width: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsgF;
