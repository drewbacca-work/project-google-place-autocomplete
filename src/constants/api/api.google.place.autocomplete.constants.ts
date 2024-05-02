import { GooglePlaceAutoCompleteResponse } from "../../interfaces/api/api.google.place.autocomplete.interface";

export const GooglePlaceAutocompleteDefaultData: GooglePlaceAutoCompleteResponse =
  {
    predictions: [
      {
        description: "",
        matched_substrings: [{ length: 0, offset: 0 }],
        place_id: "",
        reference: "",
        structured_formatting: {
          main_text: "",
          main_text_matched_substrings: [{ length: 0, offset: 0 }],
          secondary_text: "",
        },
        terms: [
          { offset: 0, value: "" },
          { offset: 0, value: "" },
        ],
        types: ["", "", ""],
      },
    ],
    status: "",
  };
