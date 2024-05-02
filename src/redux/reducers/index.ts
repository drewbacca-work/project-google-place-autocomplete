import { ApiGooglePlaceAutoComplete } from "./api/api.google.place.autocomplete";
import { Home } from "./home.reducers";
import { Map } from "./map.reducers";

const allReducers = {
  home: Home,
  map: Map,
  apiGooglePlaceAutoComplete: ApiGooglePlaceAutoComplete,
};

export default allReducers;
