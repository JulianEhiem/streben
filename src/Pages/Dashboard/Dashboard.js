import LeftSideBar from "./LeftSideBar"
import dash from "./dashboard.module.css"
import MainSection from "./MainSection"
import RightSideBar from "./RightSideBar"


const Dashboard = () => {
    return (
      <div className={dash.mainDashContainer}>
        <div className={dash.mainDash}>
          <LeftSideBar/>
          <MainSection/>
          <RightSideBar/>
        </div>
      </div>
    );
  }
  
  export default Dashboard;