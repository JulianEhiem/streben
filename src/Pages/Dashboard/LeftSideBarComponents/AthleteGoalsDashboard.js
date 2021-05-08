import leftstyles from './leftComponents.module.css'
import clipboard from '../../../Icons/clipboard.svg'
import prints from '../../../Icons/shoeprints.svg'
import bike from '../../../Icons/bike.svg'
import waves from '../../../Icons/waves.svg'
import edit from '../../../Icons/edit.svg'
import leadingArrow from '../../../Icons/leadingArrow.svg'



const AthleteGoalsDashboard = () => {
    return(
        <div className={leftstyles.goalsDashContainer}>
            <div className={leftstyles.goalsDashMain}>
                <div className={leftstyles.activityTabs}>
                    <div className={`${leftstyles.relativeEffortTab} ${leftstyles.tab}`}>
                        <img src={clipboard} alt="clipboard icon" width = {24}/>
                    </div>
                    <div className={`${leftstyles.runningTab} ${leftstyles.tab} ${leftstyles.activeTab}`}>
                        <img src={prints} alt="shoeprints icon" width = {24}/>
                    </div>
                    <div className={`${leftstyles.bikingTab} ${leftstyles.tab}`}>
                        <img src={bike} alt="bike icon" width = {24}/>
                    </div>
                    <div className={`${leftstyles.swimmingTab} ${leftstyles.tab}`}>
                        <img src={waves} alt="waves icon" width = {24}/>
                    </div>
                </div> 
                <div className={leftstyles.mileageReport}>
                    <div className={leftstyles.thisWeek}>
                        <p>THIS WEEK</p>
                    </div>
                    <div className={leftstyles.edit}>
                        <img src={edit} alt="edit icon" width = {15}/>
                    </div>
                    <div className={leftstyles.currentMileage}>
                        <p> <span className={leftstyles.actual}>25.4</span><span className={leftstyles.divider}>/</span>24 mi</p>
                    </div>
                    <div className={leftstyles.statsAndPie}>
                        <div className={leftstyles.dailyStats}>
                            <div className={`${leftstyles.monday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.mondayBar} ${leftstyles.distanceBar}`}></div>
                                <p>M</p>
                            </div>
                            <div className={`${leftstyles.tuesday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.tuesdayBar} ${leftstyles.distanceBar}`}></div>
                                <p>T</p>
                            </div>
                            <div className={`${leftstyles.wednesday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.wednesdayBar} ${leftstyles.distanceBar}`}></div>
                                <p>W</p>
                            </div>
                            <div className={`${leftstyles.thursday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.thursdayBar} ${leftstyles.distanceBar}`}></div>
                                <p>T</p>
                            </div>
                            <div className={`${leftstyles.friday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.fridayBar} ${leftstyles.distanceBar}`}></div>
                                <p>F</p>
                            </div>
                            <div className={`${leftstyles.saturday} ${leftstyles.weekday}`}>
                                <div className={`${leftstyles.saturdayBar} ${leftstyles.distanceBar}`}></div>
                                <p>S</p>
                            </div>
                            <div className={`${leftstyles.sunday} ${leftstyles.weekday}`}>
                            <div className={`${leftstyles.sundayBar} ${leftstyles.distanceBar}`}></div>
                            <p>S</p>
                        </div>
                        </div>
                        <div className={leftstyles.weeklyPie}>
                        <div className={leftstyles.pieStatus}>
                            <div className={leftstyles.pie}>
                                <img src={prints} alt="footprints icon" width = {24}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={leftstyles.hoursAndElevation}>
                        <p>3h47m</p>
                        <p>1091 ft</p>
                    </div>
                </div> 
                <div className={leftstyles.yearlyProgress}>
                    <div className={leftstyles.thisYear}>
                        <p>THIS YEAR</p>
                    </div>
                    <div className={leftstyles.yearlyMileage}>
                        <p> <span className={leftstyles.athleteMileage}>25.4</span><span className={leftstyles.divider}>/</span>24 mi</p>
                    </div>
                    <div className={leftstyles.mileageProgressBar}>
                        <div className={leftstyles.progressBar}>
                            <div className={leftstyles.bar}></div>
                        </div>
                        <div className={leftstyles.needle}></div>
                        <p>TODAY</p>
                    </div>
                    <div className={leftstyles.mileageStatus}>
                        <p>16 mi behind pace</p>
                    </div>
                </div> 
                <div className={leftstyles.manageGoals}>
                    <p>Manage Your Goals</p>
                    <p><img src={leadingArrow} alt="leading Arrow" width={12}/></p>
                </div> 
            </div>
        </div>
    )
}

export default AthleteGoalsDashboard;