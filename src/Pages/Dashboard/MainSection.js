import mainy from './mainsection.module.css';
import athleteImage from '../../Icons/profileImage.svg'
import badge from '../../Icons/premiumBadge.svg'
import prints from '../../Icons/shoeprints.svg'
import map from '../../Icons/sampleMap.jpg'
import like from '../../Icons/like.svg'
import comment from '../../Icons/comment.svg'
import down from '../../Icons/arrow-down.svg'



const MainSection = () => {
    return (
        <div className={mainy.mainSection}>
            <div className={mainy.feedFilter}>
                <div className={mainy.filter}>
                    <p>Following</p>
                    <img src={down} alt="down arrow" width = {15}/>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainy.activityCardContainer}>
                <div className={mainy.header}>
                    <div className={mainy.athleteIcon}>
                        <div className={mainy.athleteImage}>
                            <img src={athleteImage} alt="athlete image" width = {45}/>
                        </div>
                        <div className={mainy.athleteBadge}>
                            <img src={badge} alt="athlete badge" width={16}/>
                        </div>
                    </div>
                    <div className={mainy.athleteName}>
                        <div className={mainy.name}>
                            <a href="#">Chad Wimper</a>
                        </div>
                        <div className={mainy.timeStampContainer}>
                            <div className={mainy.time}>
                                Today at 4:56am <span className={mainy.dot}>.</span>
                            </div>
                            <div className={mainy.location}>
                                Frederick County, Maryland
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.activityDetails}>
                    <div className={mainy.activityIcon}>
                        <div className={mainy.icon}>
                            <img src={prints} alt="footprints icon" width={34}/>
                        </div>
                    </div>
                    <div className={mainy.details}>
                        <div className={mainy.activityTitle}>
                            <h3>Morning Run</h3>
                        </div>
                        <div className={mainy.activityMetrics}>
                            <div className={`${mainy.distance} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Distance
                                    </p>
                                    <p className={mainy.value}>
                                        30.17 mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.pace} ${mainy.metric}`}>
                                <div className={mainy.metricContainer}>
                                    <p className={mainy.title}>
                                        Pace
                                    </p>
                                    <p className={mainy.value}>
                                        12:00 /mi
                                    </p>
                                </div>
                            </div>
                            <div className={`${mainy.time} ${mainy.metric}`}>
                                <div className={mainy.metricContainerLast}>
                                    <p className={mainy.title}>
                                        Time
                                    </p>
                                    <p className={mainy.value}>
                                        6h 2m
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={mainy.map}>
                    <div className={mainy.mapImage}>
                        <img src={map} alt="athlete image"/>
                    </div>
                </div>
                <div className={mainy.footer}>
                    <div className={mainy.kudosCount}>
                        <div className={mainy.athleteAvatars}>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                            <img src={athleteImage} alt="athlete image" width = {21}/>
                        </div>
                        <div className={mainy.kudos}>
                            <p>9 kudos</p>
                        </div>
                    </div>
                    <div className={mainy.interactActions}>
                        <div className={mainy.like}>
                            <img src={like} alt="like icon" width = {17}/>
                        </div>
                        <div className={mainy.comment}>
                            <img src={comment} alt="comment icon" width = {17}/>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;