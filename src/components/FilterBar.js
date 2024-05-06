import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FilterBar = ({
  width,
  placeholder,
  searchArea,
  subTitle,
  list,
  setState,
  tags,
  handleChange,
  searchedvalue,
}) => {
  const [openList, setOpenList] = useState(false);

  const dispatch = useDispatch();
  const handleOpenDropDown = () => {
    setOpenList(!openList);
  };

  // filtering SuggestedList asper the Searchterm
  const filteredRoles = list?.filter((role) =>
    role?.toLowerCase().includes(searchedvalue.toLowerCase())
  );

  // Handle Add Tag/Filter
  const handleTag = (value) => {
    const toLower = value.toLowerCase();
    const tagss = [...tags, toLower];
    dispatch(setState(tagss));
    setOpenList(false);
  };
  // Hanlde remove tag/filter
  const handleRemoveTag = (tagToRemove) => {
    const tagss = tags.filter((prev) => prev !== tagToRemove);
    dispatch(setState(tagss));
    setOpenList(false);
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
          // minWidth: width,
          // maxWidth: "400px",
        }}
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
          {/* Tags Iterating through Map */}
          {tags?.map((item, index) => (
            <div
              style={{
                height: "80%",
                width: "auto",
                // padding: "0 10px",
                display: "flex",
                backgroundColor: "#c9c5c5",
                borderRadius: "3px",
                fontSize: "12px",
                marginRight: "5px",
              }}
              key={index}
            >
              <p
                style={{
                  paddingTop: "3px",
                  paddingLeft: "10px",
                  width: "80%",

                  textWrap: "nowrap",
                }}
              >
                {item}
              </p>
              <p
                className="closeIcon"
                style={{
                  padding: "2.5px 7px",
                  width: "20%",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveTag(item)}
              >
                x
              </p>
            </div>
          ))}
          <input
            placeholder={placeholder}
            type="text"
            style={{
              width: searchArea,
              height: "80%",
              outline: "none",
              border: "none",
            }}
            onClick={handleOpenDropDown}
            onChange={handleChange}
          />
          {list && (
            <>
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
              <div
                style={{ width: "10%", height: "75%" }}
                onClick={handleOpenDropDown}
              >
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
            </>
          )}
        </div>

        {/* Opening dropdownList/Suggested List */}
        {openList && list && (
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
            {/* Suggested List as per filters */}
            {filteredRoles?.map((item, index) => (
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
                onClick={() => handleTag(item)}
              >
                {item}
              </option>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBar;
