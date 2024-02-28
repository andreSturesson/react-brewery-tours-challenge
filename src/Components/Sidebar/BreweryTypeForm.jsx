import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterParams,
  setFilterParams,
} from "../../State/brewery/brewerySlice";
import { getTypeParams } from "../../Helpers/FilterHelper";

export default function BreweryTypeForm() {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilterParams);
  const [type, setType] = useState("");

  const filterByType = async (e) => {
    setType(e.target.value);
    const selectedType = e.target.value;
    if (selectedType === "") {
      return;
    }
    dispatch(
      setFilterParams({ ...filterParams, ...getTypeParams(selectedType) })
    );
  };

  return (
    <form id="filter-by-type-form" autoComplete="off">
      <label htmlFor="filter-by-type">
        <h3>Type of Brewery</h3>
      </label>
      <select
        name="filter-by-type"
        id="filter-by-type"
        onChange={(e) => filterByType(e)}
        value={type}
      >
        <option value="">Select a type...</option>
        <option value="micro">Micro</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
    </form>
  );
}
