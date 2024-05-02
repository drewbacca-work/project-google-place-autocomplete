import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GooglePlaceAutocompleteDefaultData } from "../../../constants/api/api.google.place.autocomplete.constants";
import { GooglePlaceAutoCompleteResponse } from "../../../interfaces/api/api.google.place.autocomplete.interface";

const initData: GooglePlaceAutoCompleteResponse =
  GooglePlaceAutocompleteDefaultData;

const initialState = {
  data: initData,
};

const apiGooglePlaceAutoComplete = createSlice({
  name: "apiGooglePlaceAutoComnplete",
  initialState,
  reducers: {
    setApiGooglePlaceAutoCompleteResponse: (
      state,
      action: PayloadAction<GooglePlaceAutoCompleteResponse>
    ) => {
      state.data = action.payload;
    },
  },
});

export const ApiGooglePlaceAutoComplete = apiGooglePlaceAutoComplete.reducer;
export const { setApiGooglePlaceAutoCompleteResponse } =
  apiGooglePlaceAutoComplete.actions;
