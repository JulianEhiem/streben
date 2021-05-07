import AthleteGoalsDashboard from "./LeftSideBarComponents/AthleteGoalsDashboard"
import AthleteProfileCard from "./LeftSideBarComponents/AthleteProfileCard"
import lefty from './leftsidebar.module.css';

const LeftSideBar = () => {
    return (
        <div className={lefty.leftSection}>
            <AthleteProfileCard/>
            <AthleteGoalsDashboard/>
        </div>
    )
}

export default LeftSideBar;