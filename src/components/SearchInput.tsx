import { AutoComplete, Input } from "antd";
import React from "react";
import { SearchInputProps } from "../interfaces/SearchInput.interfaces";

const SearchInput = (props: SearchInputProps) => {
  const { predictionList, onInputChange, onDropdownClick, value } = props;

  return (
    <div>
      <AutoComplete
        style={{ width: 400 }}
        size="large"
        options={predictionList}
        onSelect={(value, data) => {
          onDropdownClick(value, data);
        }}
        value={value}
      >
        <Input.Search
          size="large"
          placeholder="Search here"
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          value={value}
        />
      </AutoComplete>
    </div>
  );
};

export default SearchInput;
