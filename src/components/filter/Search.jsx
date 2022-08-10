import classes from './Search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from './Checkbox';
import Reset from './Reset';
function Search(){
    return <div className={classes.search}>
<form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classes.searchElements}>
          <button className={classes.searchButton}>
            <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
          </button>
          <input
            className={classes.searchBar}
            type="text"
            placeholder={"Søg Produkter"}
          />
        </div>

            <Checkbox />
        <Reset /> 
      </form>

    </div>
}

export default Search;