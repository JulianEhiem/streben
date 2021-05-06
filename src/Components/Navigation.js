import navstyles from './navigation.module.css'
import like from '../Icons/search-icon.svg'
import hamburger from '../Icons/hamburger.svg'
import arrow from '../Icons/arrow-down.svg'
import bell from '../Icons/bell.svg'
import profileImage from '../Icons/profileImage.svg'
import activityIcon from '../Icons/activityIcon.svg'

const Navigation = () => {
    return(
        <div className={navstyles.navbar}>
            <div className={navstyles.navContainer}>
                <div className={navstyles.navLeft}>
                    <ul className={navstyles.navbarMenu}>
                        <li><a href = "#" className={navstyles.navLogo}>STREBEN</a></li>
                        <li><a href = "#" ><img src={like} alt="search icon" width={17}/></a></li>
                        <li><a href = "#" ><span><img src={hamburger} alt="hamburger menu icon" width={20} className={navstyles.hamburger}/><img src={arrow} alt="arrow icon" className={`${navstyles.arrowSize} ${navstyles.hamArrow}`}/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}>Dashboard <img src={arrow} alt="arrow icon" className={navstyles.arrowSize}/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}>Training <img src={arrow} alt="arrow icon" className={navstyles.arrowSize}/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}>Explore <img src={arrow} alt="arrow icon" className={navstyles.arrowSize}/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}>Challenges</span></a></li>
                    </ul>
                </div>
                <div className={navstyles.navRight}>
                    <ul className={navstyles.navbarMenu}>
                        <li><button href = "#" className={navstyles.navBtn}>Give a Subscription</button></li>
                        <li><a href = "#" ><span className={navstyles.drop}><img src={bell} alt="bell icon"/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}><img src={profileImage} alt="profile icon"/><img src={arrow} alt="arrow icon" className={navstyles.arrowSize}/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.drop}><img src={activityIcon} alt="activity icon"/></span></a></li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Navigation;