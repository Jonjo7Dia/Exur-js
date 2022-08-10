import classes from './RightPanel.module.css';
import Filter from '../filter/Filter';
import Intro from './Intro'
function RightPanel(){

    return <div className={classes.rightPanel}>
        <Intro />
        <div className={classes.filterMobile}>
            <Filter/>
        </div>

    </div>
}

export default RightPanel;