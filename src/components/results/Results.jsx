import classes from "./Results.module.css";
import Loading from '../loading/Loading';
import {HttpGetData} from '../../hooks/requests';
import {fetchActions} from '../../store/fetch-slice';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import Result from './Result';
function Results() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.fetch);
    const getData = useCallback(async () =>{
        console.log('fetching');
        const fetchedData = await HttpGetData(
            fetch.currentPage,
            fetch.searchText,
            fetch.complianceTypeIds
        );
        dispatch(fetchActions.setLoading(false));
        dispatch(fetchActions.setResults(fetchedData.results));
        dispatch(fetchActions.setTotalPage(fetchedData.pageCount));   
        console.log(fetchedData);
    }, [filter, dispatch])
    useEffect(()=>{
        getData();

    }, []);
    return <div className={classes.results}>
    {filter.loading &&<Loading/>}
    {filter.results.map((result, index)=>{
          return <Result key={index} result={result}/>
      })}

</div>;
}

export default Results;