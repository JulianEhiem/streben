import navstyles from './navigation.module.css'

const Navigation = () => {
    return(
        <div className={navstyles.navbar}>
            <ul className={navstyles.navbarMenu}>
                <li>Search</li>
                <li>Menu</li>
                <li>Dashboard</li>
                <li>Training</li>
                <li>Explore</li>
                <li>Challenges</li>
                <li>Button</li>
                <li>Bell</li>
                <li>Profile</li>
                <li>New Activity</li>
            </ul>
        </div>
    )
}

export default Navigation;