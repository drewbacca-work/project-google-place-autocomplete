import { all } from "redux-saga/effects";
import homeSaga from "./Home.saga";

function* rootSaga() {
  yield all([homeSaga()]);
}

export default rootSaga;
