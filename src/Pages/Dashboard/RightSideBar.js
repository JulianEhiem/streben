import righty from './rightsidebar.module.css';
import challenges from '../../Icons/challengesIcon.svg'
import eye from '../../Icons/eye.svg'
import club1 from '../../Images/club1.png'
import club2 from '../../Images/club2.png'
import club3 from '../../Images/club3.png'
import club4 from '../../Images/club4.png'
import club5 from '../../Images/club5.jpeg'
import club6 from '../../Images/club6.png'

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
            <div className={righty.clubsSection}>
                <h3>Your Clubs</h3>
                <div className={righty.clubsSection}>
                    <div className={righty.clubTile}>
                        <img src={club1} alt="club1 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club2} alt="club2 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club3} alt="club3 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club4} alt="club4 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club5} alt="club5 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club6} alt="club6 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club1} alt="club1 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club2} alt="club2 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club3} alt="club3 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club4} alt="club4 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club5} alt="club5 icon" width = {48}/>
                    </div>
                    <div className={righty.clubTile}>
                        <img src={club6} alt="club6 icon" width = {48}/>
                    </div>
                </div>
                <button> View All Clubs </button>
            </div>
            <div className={righty.privacySection}>
            <div className={righty.challengesBadge}>
                    <div className={righty.badgeContainer}>
                        <img src={eye} alt="privacy icon" width = {25}/>
                    </div>
                </div>
                <div className={righty.challengesCta}>
                    <div className={righty.challengesHeader}>
                        Try a Privacy Zone
                    </div>
                    <div className={righty.challengesBody}>
                        <p>You can hide the location of your home, <br/> office or other private places in your <br/> activities.</p>
                    </div>
                    <div className={righty.challengesLink}>
                        <a href="#">Review Your Privacy Settings</a>
                    </div>
                </div>
            </div>
            <div className={righty.friendsSection}></div>
            <div className={righty.footerSection}></div>
            This is the right side bar 
        </div>
    )
}

export default RightSideBar;