import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";
import SearchInput from "../components/SearchInput";
import "../styles/Home.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  clearPredictionList,
  setLogMessage,
} from "../redux/reducers/home.reducers";
import {
  fetchGooglePlaceAutoCompleteApiAction,
  updateMapLangLongPositionAction,
} from "../redux/actions/home.action";
import { googleMapApiKey } from "../constants/common.constant";
import { PredictionListModel } from "../interfaces/SearchInput.interfaces";

const Home = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapApiKey,
    libraries: ["places"],
  });

  const predictionList = useAppSelector((state) => state.home.predictionList);
  const dispatch = useAppDispatch();

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (loadError) {
      dispatch(setLogMessage("Load Map with Error!"));
    }

    if (isLoaded) {
      dispatch(setLogMessage("Map Loaded"));
      setIsMapLoaded(true);
    }
  }, [loadError, isLoaded]);

  const onInputChange = (value: string) => {
    setInputValue(value);
    if (value.length > 0) {
      dispatch(fetchGooglePlaceAutoCompleteApiAction(value));
    } else {
      dispatch(clearPredictionList());
    }
  };

  const onDropdownClick = (
    dropdownValue: string,
    dropdownData: PredictionListModel
  ) => {
    setInputValue(dropdownData.label as string);
    dispatch(updateMapLangLongPositionAction(dropdownValue));
  };

  if (!isMapLoaded) return <></>;

  return (
    <div>
      <Map />
      <div className="home-search-input-container">
        <SearchInput
          predictionList={predictionList}
          onInputChange={onInputChange}
          onDropdownClick={onDropdownClick}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Home;
