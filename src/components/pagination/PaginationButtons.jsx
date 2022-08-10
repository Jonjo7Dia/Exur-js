import classes from "./PaginationButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function PaginationButtons(props) {
  return (
    <div className={classes.pagButton}>
      <button
        className={classes.pageButton}
      >
        <FontAwesomeIcon icon={faChevronLeft} className={"searchIcon"} />
      </button>
      {props.range.map((number, index) => {
        return (
          <button
            className={classes.pageButton}
            key={index}
          >
            {number}
          </button>
        );
      })}
      <button className={classes.pageButton}>
        <FontAwesomeIcon icon={faChevronRight} className={"searchIcon"} />
      </button>
    </div>
  );
}

export default PaginationButtons;
