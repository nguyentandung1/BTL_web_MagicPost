import '../ActivityNews/Content.css'
import {Link, Divider} from '@material-ui/core'
import FacebookIcon from './images/facebook.png'
import TwitterIcon from './images/twitter.png'
import LinkedlnIcon from './images/linkedln.png'
import TumblrIcon from './images/tumblr.png'
import PinterestIcon from './images/pinterest.png'
import Banner from './images/banner.png'

function MainContent({serviceName}) {
    return (
        <div>
            <p id="service-name">{serviceName}</p>
            <br />
            <span id="post-date">24/06/2021 13:34</span>
            <span id="share">Chia sẻ</span>
            <Link><img class="small-icon" src={FacebookIcon} alt="facebookIcon" /></Link>
            <Link><img class="small-icon" src={TwitterIcon} alt="twitterIcon" /></Link>
            <Link><img class="small-icon" src={LinkedlnIcon} alt="linkedlnIcon" /></Link>
            <Link><img class="small-icon" src={TumblrIcon} alt="tumblrIcon" /></Link>
            <Link><img class="small-icon" src={PinterestIcon} alt="pinterestIcon" /></Link>
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <div class="khuyenmai-content">
                Với mục đích nâng cấp chất lượng dịch vụ, cũng như phục vụ trải nghiệm khách hàng tốt nhất, Viettel Post và Viettel 
                Sale chính thức gửi tặng đến quý khách hàng khuyến mãi siêu “hot” trong tháng 06 này. Đó là gì? Cùng khám phá 
                trong bài viết này nhé!
            </div>
            <div class="khuyenmai-content">
                Đối với mỗi khách hàng đăng ký tạo tài khoản mới trên phần mềm của Viettel Post trong tháng 06, sẽ được tặng ngay 
                01 tháng sử dụng phần mềm quản lý bán hàng Viettel Sale hoàn toàn MIỄN PHÍ.
            </div>
            <div class="khuyenmai-content"><center><img src={Banner} alt="Banner" /></center></div>
            <div class="khuyenmai-content">
                Thời gian ưu đãi sẽ kéo dài từ nay đến hết ngày 30/06/2021. Nhanh tay đăng ký để sở hữu phần quà siêu hấp dẫn này thôi!
            </div>
        </div>
    );
}

export default MainContent;