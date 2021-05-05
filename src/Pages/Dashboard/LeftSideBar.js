import AthleteGoalsDashboard from "./LeftSideBarComponents/AthleteGoalsDashboard"
import AthleteProfileCard from "./LeftSideBarComponents/AthleteProfileCard"


const LeftSideBar = () => {
    return (
        <div>
            <AthleteProfileCard/>
            <AthleteGoalsDashboard/>
        </div>
    )
}

export default LeftSideBar;