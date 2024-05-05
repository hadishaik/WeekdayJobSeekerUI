import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";

const MasterLayout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 50,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.jdList))
      .catch((error) => console.error(error));
  };
  return (
    <main className="container" key={1}>
      <div className="" style={styles.cardsContainer}>
        <div className="" style={styles.filter}>
          <div className="" style={styles.filterSection}>
            <FilterBar
              width={"152px"}
              placeholder={"Roles"}
              searchArea={"70%"}
              subTitle={"Engineering"}
            />
            <FilterBar
              width={"200px"}
              placeholder={"Number of Employees"}
              searchArea={"80%"}
            />
            <FilterBar
              width={"140px"}
              placeholder={"Experience"}
              searchArea={"62%"}
            />
            <FilterBar
              width={"110px"}
              placeholder={"Remote"}
              searchArea={"55%"}
            />
            <FilterBar
              width={"220px"}
              placeholder={"Minimum Base Pay Salary"}
              searchArea={"90%"}
            />
            <FilterBar
              width={"220px"}
              placeholder={"Search Company Name"}
              searchArea={"80%"}
            />
          </div>
        </div>
        <Cards styles={styles} data={data} />
      </div>
    </main>
  );
};

const styles = {
  cardsContainer: {
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  filter: {
    width: "90%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "30px",
  },
  switchJob: {
    marginTop: "30px",
    marginBottom: "30px",
    width: "300px",
    gap: "20px",
    height: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    fontSize: "18px",
    lineHeight: "normal",
    fontFamily: "'Courier New', Courier, monospace",
  },
  filterSection: {
    width: "100%",
    height: "auto",
    // backgroundColor: "blueviolet",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "7px",
    // backgroundColor: "green",
    // marginBottom:''
  },
  cards: {
    width: "90%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "3.5%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    width: "360px",
    height: "594px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    transition: "transform .2s",
    marginBottom: "40px",
  },
  cardSpace: {
    width: "92%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  postedDate: {
    width: "33.75%",
    height: "22px",
    borderRadius: "40px",
    fontSize: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  },
  organization: {
    width: "80%",
    height: "90px",
    marginTop: "18px",
    marginBottom: "15px",
  },
  aboutUs: {
    width: "100%",
    height: "225px",
    marginBottom: "25px",
    position: "relative",
    overflow: "hidden",
  },
  expSection: {
    height: "50px",
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
  },
  btnStyles: {
    width: "100%",
    height: "45px",
    backgroundColor: "#80ffd4",
    cursor: "pointer",
    borderRadius: "10px",
    border: "none",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnStyles2: {
    width: "100%",
    height: "45px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3333ff",
    cursor: "pointer",
    borderRadius: "10px",
    border: "none",
    color: "white",
    marginTop: "10px",
  },
  imgStyles: {
    height: "18px",
    weight: "18px",
    objectFit: "contain",
    marginRight: "5px",
  },
  imgStyles2: {
    height: "30px",
    weight: "30px",
    objectFit: "contain",
    marginRight: "5px",
    filter: "blur(1px)",
  },
};

export default MasterLayout;
