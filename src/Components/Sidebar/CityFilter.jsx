import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterParams,
  setFilterParams,
} from "../../State/brewery/brewerySlice";
import { getCityParams } from "../../Helpers/FilterHelper";
export default function CityFilter() {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilterParams);

  const handleCityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setFilterParams({ ...filterParams, ...getCityParams(value) }));
    } else {
      dispatch(setFilterParams({ ...filterParams, ...getCityParams("") }));
    }
  };

  const handleClearAll = () => {
    if (filterParams.by_city === "") {
      return;
    }
    dispatch(setFilterParams({ ...filterParams, ...getCityParams("") }));
  };

  return (
    <>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button className="clear-all-btn" onClick={handleClearAll}>
          clear all
        </button>
      </div>
      <form id="filter-by-city-form">
        <input
          type="checkbox"
          name="chardon"
          value="chardon"
          onChange={handleCityChange}
        />
        <label htmlFor="chardon">Chardon</label>

        <input
          type="checkbox"
          name="mason"
          value="mason"
          onChange={handleCityChange}
        />
        <label htmlFor="mason">Mason</label>

        <input
          type="checkbox"
          name="whitehall"
          value="whitehall"
          onChange={handleCityChange}
        />
        <label htmlFor="whitehall">Whitehall</label>

        <input
          type="checkbox"
          name="defiance"
          value="defiance"
          onChange={handleCityChange}
        />
        <label htmlFor="defiance">Defiance</label>

        <input
          type="checkbox"
          name="columbus"
          value="columbus"
          onChange={handleCityChange}
        />
        <label htmlFor="columbus">Columbus</label>

        <input
          type="checkbox"
          name="akron"
          value="akron"
          onChange={handleCityChange}
        />
        <label htmlFor="akron">Akron</label>

        <input
          type="checkbox"
          name="cleveland"
          value="cleveland"
          onChange={handleCityChange}
        />
        <label htmlFor="cleveland">Cleveland</label>

        <input
          type="checkbox"
          name="mount-orab"
          value="mount-orab"
          onChange={handleCityChange}
        />
        <label htmlFor="mount-orab">Mount Orab</label>

        <input
          type="checkbox"
          name="lorain"
          value="lorain"
          onChange={handleCityChange}
        />
        <label htmlFor="lorain">Lorain</label>

        <input
          type="checkbox"
          name="austintown"
          value="austintown"
          onChange={handleCityChange}
        />
        <label htmlFor="austintown">Austintown</label>

        <input
          type="checkbox"
          name="columbiana"
          value="columbiana"
          onChange={handleCityChange}
        />
        <label htmlFor="columbiana">Columbiana</label>

        <input
          type="checkbox"
          name="toledo"
          value="toledo"
          onChange={handleCityChange}
        />
        <label htmlFor="toledo">Toledo</label>

        <input
          type="checkbox"
          name="holland"
          value="holland"
          onChange={handleCityChange}
        />
        <label htmlFor="holland">Holland</label>

        <input
          type="checkbox"
          name="lakewood"
          value="lakewood"
          onChange={handleCityChange}
        />
        <label htmlFor="lakewood">Lakewood</label>

        <input
          type="checkbox"
          name="bowling-green"
          value="bowling-green"
          onChange={handleCityChange}
        />
        <label htmlFor="bowling-green">Bowling Green</label>

        <input
          type="checkbox"
          name="dayton"
          value="dayton"
          onChange={handleCityChange}
        />
        <label htmlFor="dayton">Dayton</label>

        <input
          type="checkbox"
          name="wilmington"
          value="wilmington"
          onChange={handleCityChange}
        />
        <label htmlFor="wilmington">Wilmington</label>

        <input
          type="checkbox"
          name="cleveland-heights"
          value="cleveland-heights"
          onChange={handleCityChange}
        />
        <label htmlFor="cleveland-heights">Cleveland Heights</label>

        <input
          type="checkbox"
          name="strongsville"
          value="strongsville"
          onChange={handleCityChange}
        />
        <label htmlFor="strongsville">Strongsville</label>

        <input
          type="checkbox"
          name="canal-winchester"
          value="canal-winchester"
          onChange={handleCityChange}
        />
        <label htmlFor="canal-winchester">Canal Winchester</label>

        <input
          type="checkbox"
          name="logan"
          value="logan"
          onChange={handleCityChange}
        />
        <label htmlFor="logan">Logan</label>

        <input
          type="checkbox"
          name="willoughby"
          value="willoughby"
          onChange={handleCityChange}
        />
        <label htmlFor="willoughby">Willoughby</label>

        <input
          type="checkbox"
          name="buckeye-lake"
          value="buckeye-lake"
          onChange={handleCityChange}
        />
        <label htmlFor="buckeye-lake">Buckeye Lake</label>

        <input
          type="checkbox"
          name="newark"
          value="newark"
          onChange={handleCityChange}
        />
        <label htmlFor="newark">Newark</label>

        <input
          type="checkbox"
          name="canton"
          value="canton"
          onChange={handleCityChange}
        />
        <label htmlFor="canton">Canton</label>

        <input
          type="checkbox"
          name="port-clinton"
          value="port-clinton"
          onChange={handleCityChange}
        />
        <label htmlFor="port-clinton">Port Clinton</label>

        <input
          type="checkbox"
          name="mentor"
          value="mentor"
          onChange={handleCityChange}
        />
        <label htmlFor="mentor">Mentor</label>

        <input
          type="checkbox"
          name="warren"
          value="warren"
          onChange={handleCityChange}
        />
        <label htmlFor="warren">Warren</label>
      </form>
    </>
  );
}
