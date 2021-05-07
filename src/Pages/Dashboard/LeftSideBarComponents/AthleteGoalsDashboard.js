import leftstyles from './leftComponents.module.css'


const AthleteGoalsDashboard = () => {
    return(
        <div className={leftstyles.goalsDashContainer}>
            <div className={leftstyles.goalsDashMain}>
                <div className={leftstyles.activityTabs}>
                    <div className={leftstyles.relativeEffortTab}></div>
                    <div className={leftstyles.runningTab}></div>
                    <div className={leftstyles.bikingTab}></div>
                    <div className={leftstyles.swimmingTab}></div>
                </div> 
                <div className={leftstyles.mileageReport}>
                    <div className={leftstyles.thisWeek}></div>
                    <div className={leftstyles.edit}></div>
                    <div className={leftstyles.currentMileage}></div>
                    <div className={leftstyles.dailyStats}></div>
                    <div className={leftstyles.weeklyPie}></div>
                    <div className={leftstyles.hoursAndElevation}></div>
                </div> 
                <div className={leftstyles.yearlyProgress}>
                    <div className={leftstyles.thisYear}></div>
                    <div className={leftstyles.yearlyMileage}></div>
                    <div className={leftstyles.mileageProgressBar}></div>
                    <div className={leftstyles.mileageStatus}></div>
                </div> 
                <div className={leftstyles.manageGoals}></div> 
            </div>
            
            Goals Dash
        </div>
    )
}

export default AthleteGoalsDashboard;