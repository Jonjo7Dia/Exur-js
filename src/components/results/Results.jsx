import classes from "./Results.module.css";
import Loading from '../loading/Loading';
import {HttpGetData} from '../../hooks/requests';
import {fetchActions} from '../../store/fetch-slice';
import {resultsActions} from '../../store/results-slice';
import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import Result from './Result';
function Results() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.fetch);
    const results = useSelector(state => state.results);
    async function getData(){
        const fetchedData = await HttpGetData(
            filter.currentPage,
            filter.searchText,
            filter.complianceTypeIds
        );
        if(fetchedData){
            dispatch(resultsActions.setLoading(false));
            dispatch(resultsActions.setResults(fetchedData.results));
            dispatch(resultsActions.setTotalPage(fetchedData.pageCount)); 
            dispatch(resultsActions.setCurrentPage(fetchedData.currentPage));   
        }
    }
    useEffect(()=>{
        getData();

    }, [filter]);

    return <div className={classes.results}>
    {results.loading &&<Loading/>}
    {!results.loading && results.results.map((result, index)=>{
          return <Result key={index} result={result} index={index}/>
      })}

</div>;
}

export default Results;