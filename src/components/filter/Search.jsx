import classes from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Reset from "./Reset";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../../store/fetch-slice";
import {resultsActions} from '../../store/results-slice';
function Search() {
  const dispatch = useDispatch();
  const filterItems = useSelector((state) => state.fetch);
  const [searchWord, setSearchWord] = useState(filterItems.searchText);
  function submitHandler() {
    dispatch(fetchActions.setSearchText(searchWord));
    dispatch(fetchActions.setCurrentPage(1));

    dispatch(resultsActions.setResults([]));
    dispatch(resultsActions.setLoading(true));
  }
  return (
    <div className={classes.search}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className={classes.searchElements}>
          <button className={classes.searchButton} onClick={submitHandler}>
            <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
          </button>
          <input
            className={classes.searchBar}
            type="text"
            placeholder={"Søg Produkter"}
            defaultValue={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>

        <Checkbox />
        <Reset />
      </form>
    </div>
  );
}

export default Search;
