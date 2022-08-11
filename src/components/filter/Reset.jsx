import classes from "./Reset.module.css";
import {fetchActions} from '../../store/fetch-slice';
import {resultsActions} from '../../store/results-slice';

import { useDispatch } from "react-redux";

function Reset() {
    const dispatch = useDispatch();
  return (
    <div className={classes.reset}>
      <button className={classes.resetButton} onClick={()=>{
          dispatch(fetchActions.reset());
          dispatch(resultsActions.setResults([]));
          dispatch(resultsActions.setLoading(true));
          document.getElementById('checkbox2').checked = false;
          document.getElementById('checkbox1').checked = false;
          document.getElementById("searchText").value= '';

      }}>
        Ryd Filtre
      </button>
    </div>
  );
}

export default Reset;
