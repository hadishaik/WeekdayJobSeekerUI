import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filterJobs: [],
  roles: [],
  expLevel: [],
  employees: [],
  location: [],
  basePay: [],
};

export const cardsSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setFilterJobs: (state, action) => {
      state.filterJobs = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setExpLevel: (state, action) => {
      state.expLevel = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBasePay: (state, action) => {
      state.basePay = action.payload;
    },
  },
});

export const {
  setJobs,
  setFilterJobs,
  setRoles,
  setBasePay,
  setEmployees,
  setExpLevel,
  setLocation,
} = cardsSlice.actions;
export default cardsSlice.reducer;
