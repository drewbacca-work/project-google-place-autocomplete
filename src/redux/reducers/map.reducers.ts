import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mapDefaultCenterLatLng } from "../../constants/common.constant";
import { MapLatLngModel } from "../../interfaces/Map.interfaces";

const initialState = {
  mapLatLng: mapDefaultCenterLatLng,
};

const mapReducer = createSlice({
  name: "mapReducer",
  initialState,
  reducers: {
    setMapLatLng: (state, action: PayloadAction<MapLatLngModel>) => {
      state.mapLatLng = action.payload;
    },
    resetMapLatLng: (state) => {
      state.mapLatLng = mapDefaultCenterLatLng;
    },
  },
});

export const Map = mapReducer.reducer;
export const { setMapLatLng, resetMapLatLng } = mapReducer.actions;
