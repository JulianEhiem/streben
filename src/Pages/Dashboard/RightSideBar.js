import righty from './rightsidebar.module.css';
import challenges from '../../Icons/challengesIcon.svg'

const RightSideBar = () => {
    return (
        <div className={righty.rightSection}>
            <div className={righty.challengesSection}>
                <div className={righty.challengesBadge}>
                    <div className={righty.badgeContainer}>
                        <img src={challenges} alt="challenges icon" width = {25}/>
                    </div>
                </div>
                <div className={righty.challengesCta}>
                    <div className={righty.challengesHeader}>
                        Challenges
                    </div>
                    <div className={righty.challengesBody}>
                        <p>Join a run or cyclying Challenge to stay <br/>on top of your game, earn new <br/> achievements and see how you stack up.</p>
                    </div>
                    <div className={righty.challengesLink}>
                        <a href="#">View All Challenges</a>
                    </div>
                </div>
            </div>
            <div className={righty.clubsSection}></div>
            <div className={righty.privacySection}></div>
            <div className={righty.friendsSection}></div>
            <div className={righty.footerSection}></div>
            This is the right side bar 
        </div>
    )
}

export default RightSideBar;