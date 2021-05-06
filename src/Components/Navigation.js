import navstyles from './navigation.module.css'
import like from '../Icons/search-icon.svg'
import hamburger from '../Icons/hamburger.svg'
import arrow from '../Icons/arrow-down.svg'

const Navigation = () => {
    return(
        <div className={navstyles.navbar}>
            <div className={navstyles.navContainer}>
                <div className={navstyles.navLeft}>
                    <ul className={navstyles.navbarMenu}>
                        <li><a href = "#" className={navstyles.navLogo}>STREBEN</a></li>
                        <li><a href = "#" ><img src={like} alt="search icon"/></a></li>
                        <li><a href = "#" > <span className={navstyles.hamburgerSet}><img src={hamburger} alt="hamburger menu icon"/><img src={arrow} alt="arrow icon"/></span></a></li>
                        {/* <li><a href = "#" >Menu</a></li> */}
                        <li><a href = "#" ><span className={navstyles.dropdownSet}>Dashboard <img src={arrow} alt="arrow icon"/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.dropdownSet}>Training <img src={arrow} alt="arrow icon"/></span></a></li>
                        <li><a href = "#" ><span className={navstyles.dropdownSet}>Explore <img src={arrow} alt="arrow icon"/></span></a></li>
                        <li><a href = "#" >Challenges</a></li>
                    </ul>
                </div>
                <div className={navstyles.navRight}>
                    <ul className={navstyles.navbarMenu}>
                        <li><button href = "#" className={navstyles.navBtn}>Give a Subscription</button></li>
                        <li><a href = "#" >Bell</a></li>
                        <li><a href = "#" >Profile</a></li>
                        <li><a href = "#" >New Activity</a></li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Navigation;