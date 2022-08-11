import classes from "./PaginationButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {fetchActions} from '../../store/fetch-slice';
import {resultsActions} from '../../store/results-slice'
function PaginationButtons(props) {
    const dispatch = useDispatch();
    const filteredItems = useSelector(state =>  state.fetch);
    const resultsItems = useSelector(state =>  state.results);

  return (
    <div className={classes.pagButton}>
      <button className={classes.pageButton} onClick={()=>{
         if(resultsItems.currentPage > 1){
          dispatch(fetchActions.setCurrentPage(filteredItems.currentPage - 1));
          dispatch(resultsActions.setResults([]));
          dispatch(resultsActions.setLoading(true));
        }
      }}>
        <FontAwesomeIcon icon={faChevronLeft} className={"searchIcon"} />
      </button>
      {props.range.map((number, index) => {
        return (
          <button className={`${classes.pageButton} ${filteredItems.currentPage === number ? classes.active : ''}`} key={index} onClick={()=>{
            if(resultsItems.currentPage !== number &&  number !== '...'){
              dispatch(fetchActions.setCurrentPage(number));
              dispatch(resultsActions.setResults([]));
              dispatch(resultsActions.setLoading(true));
            }
          }}>
            {number}
          </button>
        );
      })}
      <button className={classes.pageButton} onClick={()=>{
          if(resultsItems.currentPage < resultsItems.totalCount){
            dispatch(fetchActions.setCurrentPage(filteredItems.currentPage + 1));
            dispatch(resultsActions.setResults([]));
            dispatch(resultsActions.setLoading(true));
          }
      }}>
        <FontAwesomeIcon icon={faChevronRight} className={"searchIcon"} />
      </button>
    </div>
  );
}

export default PaginationButtons;
