import React, { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import FilterBar from "./FilterBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoles,
  setBasePay,
  setEmployees,
  setExpLevel,
  setLocation,
  setJobs,
  setFilterJobs,
} from "../reduxSlice/cardSlice";
import apiRequest from "../apis/FetchApi";

const MasterLayout = () => {
  const [searchedvalue, setSearchedvalue] = useState("");
  const [limit, setLimit] = useState(12);
  const data = useSelector((state) => state.filter.jobs);
  const data1 = useSelector((state) => state.filter.roles);
  const data3 = useSelector((state) => state.filter.expLevel);
  const data2 = useSelector((state) => state.filter.employees);
  const data4 = useSelector((state) => state.filter.location);
  const data5 = useSelector((state) => state.filter.basePay);
  const filteredCards = useSelector((state) => state.filter.filterJobs);
  const dispatch = useDispatch();

  const fetchApi = async () => {
    setLimit((prev) => prev + 12);
    const result = await apiRequest(limit);
    dispatch(setJobs(result.jdList));
  };

  // using useMemo to Fetch Api for better Performance
  useMemo(() => {
    fetchApi();
  }, [dispatch]);

  // Filtering cards as per the request
  useEffect(() => {
    filteringCards();
  }, [data1, data2, data3, data4, data5]);

  const roles = ["frontend", "backend", "ios", "tech lead", "android"];
  const employees = [
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];
  const salary = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];
  const location = ["Remote", "Hybrid", "In-office"];
  const exp = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const filteringCards = async () => {
    const cards = data;
    const filters = [];
    const filterRoles = cards.filter((prev) => data1.includes(prev?.jobRole));
    filters.push(...filterRoles); // Using push to add elements of filterRoles to filters
    const filterExp = cards.filter((prev) =>
      data3.includes(prev?.minExp?.toString())
    );
    filters.push(...filterExp); // Using push to add elements of filterExp to filters
    const filterLoc = cards.filter((prev) => {
      if (data4.includes("in-office")) {
        return (
          prev.location.toLowerCase() !== "remote" &&
          prev.location.toLowerCase() !== "hybrid"
        );
      } else {
        return data4.includes(prev.location);
      }
    });
    filters.push(...filterLoc);
    const salaries = data5.map((salary) => parseInt(salary));
    console.log(...salaries);
    const filterpay = cards.filter((prev) => prev?.minJdSalary >= salaries[0]);
    filters.push(...filterpay);
    const finalCards = filters;
    dispatch(setFilterJobs(finalCards));
  };

  // Handle search specific Company independent function
  const handleCompanySearch = (e) => {
    const value = e.target.value;
    console.log(value, "i am value");
    // setSearchedvalue(value)
    const cards = data;
    const timer = setTimeout(() => {
      const companySearch = cards.filter(
        (prev) => prev.companyName.toLowerCase() === value.toLowerCase()
      );
      dispatch(setFilterJobs(companySearch));
    }, 1000);
    return () => clearTimeout(timer);
  };

  // handle Search function
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchedvalue(value);

    // input field is Empty String it sets State to empty
    if (value === "") {
      setSearchedvalue("");
    }
  };

  const appliedFilters =
    data1.length >= 1 ||
    data2.length >= 1 ||
    data3.length >= 1 ||
    data4.length >= 1 ||
    filteredCards.length >= 1;
  return (
    <main className="container" key={1}>
      <div className="" style={styles.cardsContainer}>
        <div className="" style={styles.filter}>
          <div className="" style={styles.filterSection}>
            {/* Filtering input/DropDowns Reusable Component */}
            <FilterBar
              width={"200px"}
              placeholder={"Roles"}
              searchArea={"70%"}
              subTitle={"Engineering"}
              list={roles}
              handleChange={handleChange}
              searchedvalue={searchedvalue}
              tags={data1} // tags Prop for dynamatically getting the tags
              setState={setRoles} //setState Prop for setting the states dynamatically
            />
            <FilterBar
              width={"230px"}
              placeholder={"Number of Employees"}
              searchArea={"80%"}
              list={employees}
              setState={setEmployees}
              tags={data2}
              handleChange={handleChange}
              searchedvalue={searchedvalue}
            />
            <FilterBar
              width={"140px"}
              placeholder={"Experience"}
              searchArea={"62%"}
              list={exp}
              setState={setExpLevel}
              tags={data3}
              handleChange={handleChange}
              searchedvalue={searchedvalue}
            />
            <FilterBar
              width={"140px"}
              placeholder={"Remote"}
              searchArea={"55%"}
              list={location}
              setState={setLocation}
              tags={data4}
              handleChange={handleChange}
              searchedvalue={searchedvalue}
            />
            <FilterBar
              width={"220px"}
              placeholder={"Minimum Base Pay Salary"}
              searchArea={"90%"}
              list={salary}
              setState={setBasePay}
              tags={data5}
              handleChange={handleChange}
              searchedvalue={searchedvalue}
            />
            <FilterBar
              width={"180px"}
              placeholder={"Search Company Name"}
              searchArea={"90%"}
              tags={[]}
              handleChange={handleCompanySearch}
              searchedvalue={searchedvalue}
            />
          </div>
        </div>
        {/* Cards parent Element  */}
        <Cards
          styles={styles}
          data={data}
          appliedFilters={appliedFilters}
          fetchApi={fetchApi}
        />
      </div>
    </main>
  );
};

// CSS Styles
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
    // minWidth: "300px",
    // maxWidth: "360px",
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
