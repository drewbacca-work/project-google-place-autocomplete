export interface GooglePlaceAutoCompleteResponse {
  predictions: Array<PlacePredictionModel>;
  status: string;
}

export interface PlacePredictionModel {
  description: string;
  matched_substrings: Array<PlaceLengthOffsetModel>;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    main_text_matched_substrings: Array<PlaceLengthOffsetModel>;
    secondary_text: string;
  };
  terms: Array<PlaceOffsetValueModel>;
  types: Array<string>;
}

export interface PlaceLengthOffsetModel {
  length: number;
  offset: number;
}

export interface PlaceOffsetValueModel {
  offset: number;
  value: string;
}
