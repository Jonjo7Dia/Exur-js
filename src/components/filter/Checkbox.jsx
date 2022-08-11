import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../../store/fetch-slice";
import classes from "./Checkbox.module.css";
import { resultsActions } from "../../store/results-slice";
function Checkbox() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.fetch);
  const [checkBox1, setCheckBox1] = useState(
    filters.complianceTypeIds.includes(2)
  );
  const [checkBox2, setCheckBox2] = useState(
    filters.complianceTypeIds.includes(1)
  );
  useEffect(() => {
    let array = [];

    if (checkBox1 || checkBox2) {
      if (checkBox1) {
        array.push(2);
      }
      if (checkBox2) {
        array.push(1);
      }
      dispatch(fetchActions.setCompliance(array));
    }
    if (!checkBox1 && !checkBox2) {
      dispatch(fetchActions.emptyCompliance());
    }
  }, [checkBox1, checkBox2]);
  return (
    <div className={classes.checkboxes}>
      <div className={classes.checkBoxHeading}>
        <img src={"https://produkter.dk/img/pil.a217864f.svg"} alt="" />
        <p>Filtrer på produkttype</p>
      </div>
      <div className={classes.filterOptions}>
        <div className={classes.checkbox}>
          <input
            type="checkbox"
            defaultChecked={checkBox1}
            onClick={() => {
              setCheckBox1(!checkBox1);
              dispatch(resultsActions.setResults([]));
              dispatch(resultsActions.setLoading(true));
            }}
            id={"checkbox1"}
          />
          <p>Farlige produkter</p>
        </div>
        <div className={classes.checkbox}>
          <input
            type="checkbox"
            defaultChecked={checkBox2}
            id={"checkbox2"}
            onClick={() => {
              setCheckBox2(!checkBox1);
              dispatch(resultsActions.setResults([]));
              dispatch(resultsActions.setLoading(true));
            }}
          />
          <p>Mangelfulde produkter</p>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
