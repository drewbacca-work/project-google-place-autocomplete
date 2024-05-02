import { ReactNode } from "react";

export interface SearchInputProps {
  predictionList: Array<PredictionListModel>;
  onInputChange: (value: string) => void;
  onDropdownClick: (e: string, d: PredictionListModel) => void;
  value: string;
}

export interface PredictionListModel {
  label: ReactNode;
  value: string;
}
