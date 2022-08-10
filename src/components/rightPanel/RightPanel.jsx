import classes from './RightPanel.module.css';
import Filter from '../filter/Filter';
import Intro from './Intro';
import Results from '../results/Results'
function RightPanel(){

    return <div className={classes.rightPanel}>
        <Intro />
        <div className={classes.filterMobile}>
            <Filter/>
        </div>
        <Results/>
    </div>
}

export default RightPanel;