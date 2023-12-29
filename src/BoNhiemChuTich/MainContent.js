import '../ActivityNews/Content.css'
import {Link, Divider} from '@material-ui/core'
import FacebookIcon from './images/facebook.png'
import TwitterIcon from './images/twitter.png'
import LinkedlnIcon from './images/linkedln.png'
import TumblrIcon from './images/tumblr.png'
import PinterestIcon from './images/pinterest.png'

function MainContent({serviceName}) {
    return (
        <div>
            <p id="service-name">{serviceName}</p>
            <br />
            <span id="post-date">14/08/2020 08:20</span>
            <span id="share">Chia sẻ</span>
            <Link><img class="small-icon" src={FacebookIcon} alt="facebookIcon" /></Link>
            <Link><img class="small-icon" src={TwitterIcon} alt="twitterIcon" /></Link>
            <Link><img class="small-icon" src={LinkedlnIcon} alt="linkedlnIcon" /></Link>
            <Link><img class="small-icon" src={TumblrIcon} alt="tumblrIcon" /></Link>
            <Link><img class="small-icon" src={PinterestIcon} alt="pinterestIcon" /></Link>
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <div>
            MagicPost trân trọng công bố thông tin bổ nhiệm Chủ tịch HĐQT nhiệm 
                kỳ 2019 – 2024, vui lòng theo dõi tại đây.
            </div>
        </div>
    );
}

export default MainContent;