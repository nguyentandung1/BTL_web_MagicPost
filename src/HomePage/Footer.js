import './Footer.css'
import {Grid} from '@material-ui/core'
import {Dropdown} from 'react-bootstrap'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import SupportIcon from './images/support-icon.PNG'
import Facebook from './images/facebook.PNG'
import Youtube from './images/youtube.PNG'
import Linkedln from './images/linkedln.PNG'
import Mail from './images/mail.PNG'
import Permission from './images/permission.png'

function Footer() {
    return (
        <div id="footer-container">
            <Grid container>
                <Grid item md={2} xs={false}>

                </Grid>
                <Grid item md={3} xs={12} id="footer-grid-1">
                    <div><b>TỔNG CÔNG TY MagicPost</b></div>
                    <br />
                    <div>Magic Post là doanh nghiệp hàng đầu cung cấp dịch vụ 
                        chuyển phát nhanh hàng hoá, bưu kiện trong nước, quốc
                        tế tại Việt Nam.</div>
                    <br />
                    <Dropdown.Divider />
                    <br />
                    <div>THÔNG TIN LIÊN HỆ</div>
                    <div>
                        <LocationOnIcon color="secondary" />
                        Giấy chứng nhận Đăng ký Kinh doanh số: 0104093672 
                        do Phòng ĐKKD Thành phố Hà Nội Cấp ngày:
                        12/07/2019
                    </div>
                    <br />
                    <div>
                        <LocationOnIcon color="secondary" />
                        VP giao dịch:
                        Toà nhà N2, Km số 2, Đại lộ Thăng Long, Phường Mễ Trì,
                        Quận Nam Từ Liêm, Hà Nội.
                    </div>
                    <br />
                    <div>
                        <MailOutlineIcon color="secondary" />
                        cskh@magicpost.com.vn
                    </div>
                    <br />
                    <div>
                        <PhoneIcon color="secondary" />
                        19008095
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <div class="footer-center">
                        <div><b>GIỚI THIỆU</b></div>
                        <br/>
                        <div>Giới thiệu Magic Post</div>
                        <br/>
                        <div>Tin tức</div>
                        <br/>
                        <div>Mạng lưới bưu cục</div>
                        <br/>
                        <div>Câu hỏi thường gặp</div>
                        <br/>
                        <div>Tuyển dụng</div>
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <div class="footer-center">
                        <div><b>HỖ TRỢ KHÁCH HÀNG</b></div>
                        <br />
                        <div>Điều khoản sử dụng</div>
                        <br />
                        <div>Chính sách bảo mật thông tin</div>
                        <br />
                        <div>Chính sách vận chuyển</div>
                        <br />
                        <div>Hướng dẫn sử dụng dịch vụ</div>
                        <br />
                        <div>Câu hỏi thường gặp</div>
                        <br />
                        <div>Câu hỏi thường gặp</div>
                        <br />
                        <div>Góp ý sản phẩm dịch vụ</div>
                        <br />
                        <div>Quy chế hoạt động TMĐT</div>
                        <br />
                        <div>Truy cập nhanh</div>
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <div><b>HỖ TRỢ</b></div>
                    <div>
                        <img id="support-icon" src={SupportIcon} alt="SupportIcon"/>
                        <div>Liên hệ Hotline: 7:00 – 20:00</div>
                        <div id="phone-number"><b>19008095</b></div>
                    </div>
                    <br/>
                    <div><b>KẾT NỐI</b></div>
                    <br />
                    <div>
                        <img class="media-img" src={Facebook} alt="facebook" />
                        <img class="media-img" src={Youtube} alt="youtube" />
                        <img class="media-img" src={Linkedln} alt="linkedln" />
                        <img class="media-img" src={Mail} alt="mail" />
                    </div>
                    <br />
                    <img id="permission-img" src={Permission} alt="permission" />
                </Grid>
                <Grid item md={1} xs={false}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;