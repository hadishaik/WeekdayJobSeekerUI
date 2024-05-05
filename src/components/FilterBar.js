import React, { useState } from "react";

const FilterBar = ({ width, placeholder, searchArea, subTitle }) => {
  const [openList, setOpenList] = useState(false);
  const handleOpenDropDown = () => {
    setOpenList(!openList);
  };
  return (
    <>
      <div
        style={{
          height: "40px",
          width: width,
          border: "1px solid #ccc",
          borderColor: "gray",
          borderRadius: "8px",
          fontSize: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        onClick={handleOpenDropDown}
      >
        <div
          style={{
            height: "60%",
            width: "90%",
            display: "flex",
            alignItems: "center",
            //   backgroundColor: "gray",
          }}
        >
          <input
            placeholder={placeholder}
            type="text"
            style={{
              width: searchArea,
              height: "80%",
              outline: "none",
              border: "none",
            }}
          />
          <div
            style={{
              width: "2px",
              height: "70%",
              backgroundColor: "#646669",
              borderRadius: "20px",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          ></div>
          <div style={{ width: "10%", height: "75%" }}>
            {/* <img src="" style={{ objectFit: "contain" }} /> */}
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              fill="#646669"
            >
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
          </div>
        </div>
        {/* Opening dropdownList */}
        {openList && (
          <div
            style={{
              height: "auto",
              width: "100%",
              border: "1px solid gray",
              position: "absolute",
              top: "120%",
              left: 0,
              overflowY: "scroll",
              borderRadius: "8px",
              zIndex: 10,
              backgroundColor: "white",
            }}
          >
            {subTitle && (
              <div
                style={{
                  fontWeight: "bold",
                  color: "GrayText",
                  marginTop: "15px",
                  marginBottom: "8px",
                  marginLeft: "10px",
                }}
              >
                {subTitle}
              </div>
            )}
            {Array.from({ length: 10 }).map((_, index) => (
              <option
                key={index}
                style={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  textDecoration: "none",
                  paddingLeft: "10px",
                  cursor: "pointer",
                }}
                className="option"
              >
                {" "}
                FrontEnd{" "}
              </option>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBar;
