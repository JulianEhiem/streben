import leftstyles from './leftComponents.module.css'
import profileImage from '../../../Icons/profileImage.svg'
import badge from '../../../Icons/premiumBadge.svg'
import leadingArrow from '../../../Icons/leadingArrow.svg'

const AthleteProfileCard = () => {
    return(
        <div className={leftstyles.container}>
            <div className={leftstyles.profileCard}>
                <div className={leftstyles.profileImage}>
                    <div className={leftstyles.athleteImage}>
                        <img src={profileImage} alt="profile image"/>
                    </div>
                    <div className={leftstyles.premiumBadge}>
                        <img src={badge} alt="profile badge"/>
                    </div>
                </div>
                <div className={leftstyles.profileStats}>
                    <div className={leftstyles.athleteName}>
                        <h2>Chad Wimper</h2>
                    </div>
                    <div className={leftstyles.socialStats}>
                        <div className={leftstyles.following}>
                            <p>Following</p>
                            <h3>178</h3>
                        </div>
                        <div className={leftstyles.followers}>
                            <p>Followers</p>
                            <h3>574</h3>
                        </div>
                        <div className={leftstyles.activities}>
                            <p>Activities</p>
                            <h3>789</h3>
                        </div>
                    </div>
                </div>
                <div className={leftstyles.profileHistory}>
                    <p>Latest Activity</p>
                    <p><strong>Morning Run</strong><span className={leftstyles.dot}>.</span>Today</p>
                </div>
                <div className={leftstyles.profileLog}>
                    <p>Your Training Log</p>
                    <p><img src={leadingArrow} alt="leading Arrow"/></p>
                </div>
            </div>
            
        </div>
    )
}

export default AthleteProfileCard;