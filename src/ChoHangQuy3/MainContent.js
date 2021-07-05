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
            <div class="chohangquy3-content">
                Ngày đăng: 14/08/2020
            </div>
            <div class="chohangquy3-content">
                Kính gửi: Các nhà thầu            
            </div>
            <div class="chohangquy3-container">
                Tổng công ty cổ phần Bưu chính Viettel có nhu cầu mua túi chở hàng quý III năm 2020 cho đơn vị theo thông tin như sau:
                <div class="chohangquy3-list">
                    <div class="chohangquy3">Tên gói thầu: Cung cấp túi chở hàng Quý III năm 2020</div>
                    <div class="chohangquy3">Hình thức lựa chọn nhà thầu: Chào hàng cạnh tranh rút gọn trong nước</div>
                    <div class="chohangquy3">Thời điểm phát hành yêu cầu báo giá: 14/08/2020</div>
                    <div class="chohangquy3">Thời điểm hết hạn nhận báo giá: 14h00, ngày 18/08/2020</div>
                    <div class="chohangquy3">Địa chỉ nhận hồ sơ chào hàng của bên mời thầu: Tổng công ty cổ phần Bưu chính Viettel – Tòa nhà N1, Km số 2 Đại Lộ Thăng Long, phường Mễ Trì, quận Nam Từ Liêm, Hà Nội. Số điện thoại: 024.62776812</div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;