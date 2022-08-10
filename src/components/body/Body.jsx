import classes from "./Body.module.css";
import Filter from '../filter/Filter';
import RightPanel from '../rightPanel/RightPanel';
function Body() {
  return (
    <div className={classes.body}>
      <div className={classes.backgroundImage}>
        <img
          src={"https://produkter.dk/img/baggrund_halvcirkel_top.8208b307.svg"}
          alt=""
        />
      </div>
      <div className={classes.filterBig}>
          <Filter />
      </div>
      <RightPanel />
    </div>
  );
}

export default Body;
