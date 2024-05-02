import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PredictionListModel } from "../../interfaces/SearchInput.interfaces";
import { resetAllData } from "../actions/common.action";

const initPredictionList: Array<PredictionListModel> = [];

const initialState = {
  logMessage: "",
  predictionList: initPredictionList,
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    setLogMessage: (state, action: PayloadAction<string>) => {
      state.logMessage = action.payload;
    },
    setPredictionList: (
      state,
      action: PayloadAction<Array<PredictionListModel>>
    ) => {
      state.predictionList = action.payload;
    },
    clearPredictionList: (state) => {
      state.predictionList = initPredictionList;
    },
  },
});

export const Home = homeReducer.reducer;
export const { setLogMessage, setPredictionList, clearPredictionList } =
  homeReducer.actions;
