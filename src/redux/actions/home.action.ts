import { createAction } from "@reduxjs/toolkit";

export const fetchGooglePlaceAutoCompleteApiAction = createAction<string>(
  "fetchGooglePlaceAutoCompleteApiAction"
);

export const updateMapLangLongPositionAction = createAction<string>(
  "updateMapLangLongPositionAction"
);
