import classes from './Checkbox.module.css'

function Checkbox(){
    return <div className={classes.checkboxes}>
    <div className={classes.checkBoxHeading}>
      <img src={"https://produkter.dk/img/pil.a217864f.svg"} alt="" />
      <p>Filtrer på produkttype</p>
    </div>
    <div className={classes.filterOptions}>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
        />
        <p>Farlige produkter</p>
      </div>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
        />
        <p>Mangelfulde produkter</p>
      </div>
    </div>
  </div>
}

export default Checkbox;