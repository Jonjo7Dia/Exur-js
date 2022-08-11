import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    totalCount: 14,
    pageSize: 36,
    siblingCount: 1,
    currentPage: 1,
    loading: true,
    results: [],
  },
  reducers: {
    setCurrentPage(state, action) {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    setTotalPage(state,action){
        return {
            ...state,
            totalCount: action.payload,
        }
    },
    setSearchText(state, action) {
      return {
        ...state,
        searchText: action.payload,
      };
    },
    setCompliance(state, action) {
      return {
        ...state,
        complianceTypeIds: action.payload,
      };
    },
    setResults(state, action){
        return {
            ...state, 
            results: action.payload,
        }
    },
    setLoading(state,action){
        return {
            ...state, 
            loading: action.payload,
        }
    },
    reset(state) {
      return {
        ...state,
        totalCount: 14,
        pageSize: 36,
        siblingCount: 1,
        currentPage: 1,
        searchText: "",
        complianceTypeIds: [],
        loading: true,
        results: [],
      };
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
