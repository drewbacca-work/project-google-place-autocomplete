import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { googleMapApiKey, serverStatus } from "../../constants/common.constant";
import { PlacePredictionModel } from "../../interfaces/api/api.google.place.autocomplete.interface";
import { PredictionListModel } from "../../interfaces/SearchInput.interfaces";
import {
  fetchGooglePlaceAutoCompleteApiAction,
  updateMapLangLongPositionAction,
} from "../actions/home.action";
import { setApiGooglePlaceAutoCompleteResponse } from "../reducers/api/api.google.place.autocomplete";
import { setLogMessage, setPredictionList } from "../reducers/home.reducers";
import { setMapLatLng } from "../reducers/map.reducers";

export function* fetchGooglePlaceAutoCompleteApi(action: any): Generator<any> {
  try {
    const response: any = yield call(
      axios.get,
      `/autocomplete/json?input=${action.payload}&types=geocode&key=${googleMapApiKey}`,
      {
        data: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        },
      }
    );

    if (response && response.status === serverStatus.success) {
      // Store the response for future use if needed
      yield put(setApiGooglePlaceAutoCompleteResponse(response.data));

      // Massage the data
      const newList: Array<PredictionListModel> = [];
      response.data.predictions.forEach((predict: PlacePredictionModel) => {
        const newData: PredictionListModel = {
          label: predict.description,
          value: predict.place_id,
        };
        newList.push(newData);
      });
      yield put(setPredictionList(newList));
    }
  } catch (e: any) {
    yield put(setLogMessage("[ERROR]:" + e?.message));
  }
}

export function* updateMapLangLongPosition(action: any): Generator<any> {
  const placeId = action.payload;

  const placesList: any = yield select(
    (state: any) => state.apiGooglePlaceAutoComplete.data
  );
  const selectedPlace: PlacePredictionModel = placesList.predictions.filter(
    (place: PlacePredictionModel) => place.place_id === placeId
  );
  yield put(setPredictionList([]));

  // Get the geometry based on place id
  const geocoder = new google.maps.Geocoder();
  const geoResult: any = yield call(geocoder.geocode, { placeId: placeId });
  if (geoResult && geoResult.results[0]) {
    yield put(
      setMapLatLng({
        lat: geoResult.results[0].geometry.location.lat(),
        lng: geoResult.results[0].geometry.location.lng(),
      })
    );
  }
}

export function* homeSaga() {
  yield takeEvery(
    fetchGooglePlaceAutoCompleteApiAction.type,
    fetchGooglePlaceAutoCompleteApi
  );
  yield takeEvery(
    updateMapLangLongPositionAction.type,
    updateMapLangLongPosition
  );
}
export default homeSaga;
