import { useSelector } from "react-redux";
import classes from "./NoResultFound.module.css";

function NoResultFound() {
   const filterItems =  useSelector(state => state.fetch);


  return (
    <div className={classes.noResults}>
      <p className={classes.dynamicResults}>Vi fandt ingen produkter</p>
      <p className={classes.dynamicResults}>for din søgning</p>
      <h4>{`"${filterItems.searchText}"`}</h4>
      <div className={classes.noResultsInfo}>
        <p>
          Din søgning i listen over farlige og mangelfulde produkter gav intet
          resultat!
        </p>
        <p>
          Det betyder, at vi ikke har registreret problemer med det produkt, du
          har søgt på.
        </p>
        <p>
          Vær opmærksom på, at det ikke betyder, at vi har godkendt produktet.
        </p>
        <p>
          Vi godkender ikke produkter, men vi laver stikprøvekontroller for at
          tjekke sikkerheden i de enkelte udvalgte produkter.
        </p>
      </div>
    </div>
  );
}

export default NoResultFound;
