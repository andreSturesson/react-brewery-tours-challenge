import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header";
import { getBreweries } from "./Helpers/BreweryAPI";
import { setBreweries, selectFilterParams } from "./State/brewery/brewerySlice";
import { buildUrl } from "./Helpers/FilterHelper";
import Main from "./Components/Main/Main";

export default function App() {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilterParams);

  //Should maybe be in a useEffect in Main.jsx
  useEffect(() => {
    getBreweries(buildUrl(filterParams)).then((data) => {
      dispatch(setBreweries(data));
    });
  }, [dispatch, filterParams]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
