import classes from './RightPanel.module.css';
import Filter from '../filter/Filter';
import Intro from './Intro';
import Results from '../results/Results'
import { useSelector } from 'react-redux';
import Pagination from '../pagination/Pagination';
function RightPanel(){
    const filterItems = useSelector(state => state.fetch);
    return <div className={classes.rightPanel}>
        <Intro />
        <div className={classes.filterMobile}>
            <Filter/>
        </div>
        <Results/>
        {!filterItems.loading && <Pagination />}
    </div>
}

export default RightPanel;