import navstyles from './navigation.module.css'

const Navigation = () => {
    return(
        <div className={navstyles.navbar}>
            <div className={navstyles.navContainer}>
                <div className={navstyles.navLeft}>
                    <ul className={navstyles.navbarMenu}>
                        <li><a href = "#" className={navstyles.navLogo}>STREBEN</a></li>
                        {/* <li><a href = "#" className={navstyles.navbarMenu}><span >STREBEN</span></a></li> */}
                        <li><a href = "#" >Search</a></li>
                        <li><a href = "#" >Menu</a></li>
                        <li><a href = "#" >Dashboard</a></li>
                        <li><a href = "#" >Training</a></li>
                        <li><a href = "#" >Explore</a></li>
                        <li><a href = "#" >Challenges</a></li>
                    </ul>
                </div>
                <div className={navstyles.navRight}>
                    <ul className={navstyles.navbarMenu}>
                        <li><a href = "#" >Button</a></li>
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