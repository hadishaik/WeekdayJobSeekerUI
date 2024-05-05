import React from "react";
import Btn from "./Btn";

const Card = ({
  item,
  card,
  cardSpace,
  postedOn,
  companyDetails,
  aboutUs,
  expSection,
  btnTitle,
  btnTitle2,
  btnStyles,
  btnStyles2,
  imgStyles,
  imgStyles2,
}) => {
  return (
    <div key={item?.jdUid} style={card}>
      <div style={cardSpace}>
        {/* Posted details */}
        <div style={postedOn}>Posted 10 days ago</div>
        {/* Company Details */}
        <div style={companyDetails}>
          <div
            className=""
            style={{
              display: "flex",

              height: "66px",
              width: "100%",
            }}
          >
            <div
              className=""
              style={{
                height: "66px",
                width: "20%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={item?.logoUrl ?? "/logo512.png"}
                style={{ height: "40px", width: "40px", objectFit: "contain" }}
                alt="logo"
              />
            </div>
            <div className="" style={{ fontSize: "14px", marginLeft: "8px" }}>
              <p style={{ color: "gray", paddingBottom: "5px" }}>
                {item?.companyName}
              </p>
              <p style={{ paddingBottom: "5px", fontSize: "16px" }}>
                {" "}
                {item?.jobRole}
              </p>
              <p style={{}}>{item?.location}</p>
            </div>
          </div>
          <p style={{ fontSize: "16px", paddingTop: "8px", color: "GrayText" }}>
            Estimated Salary: {item?.minJdSalary ?? "10"} - {item?.maxJdSalary}{" "}
            LPA
          </p>
        </div>
        {/* About Organization */}
        <div style={aboutUs}>
          <p style={{ fontSize: "18px" }}> About Company: </p>
          <p style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
            {" "}
            About us:{" "}
          </p>
          <p style={{ color: "gray" }}>{item?.jobDetailsFromCompany}</p>
          <div
            style={{
              width: "100%",
              height: "70px",
              color: "#4747d1",
              fontSize: "16px",
              position: "absolute",
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            }}
          >
            <div
              style={{
                paddingTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href={item?.jdLink}
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                View job
              </a>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div style={expSection}>
          <p style={{ color: "GrayText" }}> Minimum Experience </p>
          <p> {item?.minExp ?? 0} years</p>
        </div>
        {/* Easy Apply and Referrals buttons */}
        <Btn
          styles={btnStyles}
          title={btnTitle}
          image={"/EasyApply.png"}
          imgStyle={imgStyles}
        />
        <Btn
          styles={btnStyles2}
          title={btnTitle2}
          image={"/Icon1.png"}
          image2={"/Icon2.png"}
          imgStyle={imgStyles2}
        />
      </div>
    </div>
  );
};

export default React.memo(Card);
