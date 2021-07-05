import '../ActivityNews/Content.css'
import { Link, Divider } from '@material-ui/core'
import FacebookIcon from './images/facebook.png'
import TwitterIcon from './images/twitter.png'
import LinkedlnIcon from './images/linkedln.png'
import TumblrIcon from './images/tumblr.png'
import PinterestIcon from './images/pinterest.png'
import Banner from './images/banner.jpg'
import Job from './Job'

function MainContent({serviceName}) {
    var jobList = [
        {
            'job': 'Trưởng bưu cục/Hub (Thu nhập từ 12 triệu/tháng)',
            'jd': 'Tổ chức sản xuất kinh doanh, phát triển doanh thu bưu cục/Hub-Chịu trách nhiệm về mọi hoạt động của bưu cục/Hub trên địa bàn phụ trách',
            'require': 'Tuổi: Từ 22-35 tuổi-Tốt nghiệp Cao đẳng trở lên, ưu tiên các chuyên ngành quản trị, tài chính.-Có trên 2 năm kinh nghiệm ở lĩnh vực bưu chính',
            'applyAt': 'https://forms.gle/dXP7htCo6HXY9tCw9 ',
        },
        {
            'job': 'Nhân viên kinh doanh (Thu nhập 7-12 triệu/tháng)',
            'jd': 'Tìm kiếm khách hàng, tư vấn hỗ trợ giải đáp thắc mắc của khách hàng-Đàm phán, thuyết phục, ký kết hợp đồng với khách hàng',
            'require': 'Tuổi từ 23 – 30 tuổi-Tốt nghiệp Cao đẳng, Đại học , yêu thích công việc kinh doanh -Có khả năng giao tiếp, đàm phán',
            'applyAt': 'https://forms.gle/GRugvCE7c88eQTVY6 ',
        },
        {
            'job': 'Nhân viên bán hàng điểm bán (Thu nhập 7-12 triệu/tháng)',
            'jd': 'Phát triển các kênh điểm bán theo kế hoạch-Tư vấn bán hàng, cung cấp hàng hóa theo nhu cầu của điểm bán',
            'require': 'Tuổi: dưới 28 tuổi-Tốt nghiệp Trung cấp trở lên-Giao tiếp tốt, năng động, chịu khó',
            'applyAt': 'https://forms.gle/GRugvCE7c88eQTVY6 ',
        },
        {
            'job': 'Nhân viên bán hàng doanh nghiệp (Thu nhập 10-15 triệu/tháng)',
            'jd': 'Trực tiếp bán hàng, phát triển và quản lý các kênh bán hàng trên địa bàn được giao',
            'require': 'Tuổi: Từ 20 – 35 tuổi-Tốt nghiệp Cao đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh',
            'applyAt': 'https://forms.gle/GRugvCE7c88eQTVY6 ',
        },
        {
            'job': 'Nhân viên giao dịch (Thu nhập 10-20 triệu/tháng)',
            'jd': 'Phát triển doanh thu nhận từ khách hàng lẻ đến bưu cục-Giải quyết khiếu nại, chăm sóc khách hàng, điều hành đơn TMĐT-Thực hiện các công việc tài chính: Thủ quỹ, thanh toán COD,…',
            'require': 'Tuổi: Từ 20-25 tuổi-Tốt nghiệp Trung cấp trở lên-Ưu tiên có kinh nghiệm về kinh doanh, bán hàng. Có khả năng làm việc độc lập và theo nhóm tốt, chịu được áp lực cao trong công việc.-Giao tiếp tốt, kỹ năng xử lý tình huống nhanh, ngoại hình ưa nhìn, nhanh nhẹn, nhiệt tình.',
            'applyAt': 'https://forms.gle/yTAyyNtMBEUCpsSHA',
        },
        {
            'job': 'Nhân viên bán hàng (Thu nhập 8-10 triệu/tháng)',
            'jd': 'Tìm kiếm, phát triển khách hàng mới và chăm sóc khách hàng-Thực hiện nhận bưu phẩm trên địa bàn được phân công, đảm bảo chỉ tiêu chất lượng về dịch vụ',
            'require': 'Tuổi: dưới 40 tuổi, sức khỏe tốt-Tốt nghiệp THPT trở lên-Giao tiếp tốt, chăm chỉ, thật thà',
            'applyAt': 'https://forms.gle/LDiXMP9eW2DLehmPA',
        },
    ]

    return (
        <div>
            <p id="service-name">{serviceName}</p>
            <br />
            <span id="post-date">02/06/2021 10:10</span>
            <span id="share">Chia sẻ</span>
            <Link><img class="small-icon" src={FacebookIcon} alt="facebookIcon" /></Link>
            <Link><img class="small-icon" src={TwitterIcon} alt="twitterIcon" /></Link>
            <Link><img class="small-icon" src={LinkedlnIcon} alt="linkedlnIcon" /></Link>
            <Link><img class="small-icon" src={TumblrIcon} alt="tumblrIcon" /></Link>
            <Link><img class="small-icon" src={PinterestIcon} alt="pinterestIcon" /></Link>
            <Divider style={{marginTop: "10px", marginBottom: "10px"}} />
            <div id="hire-main-content">
                <img id="tuyendung-banner" src={Banner} alt="banner" />
                <b><i>Nhằm nâng cao chất lượng dịch vụ, Viettel Post triển khai chương trình tổng tuyển dụng nhiều vị trí với thu nhập hấp dẫn tới 20 TRIỆU/tháng</i></b>
                {
                    jobList.map(i => {
                        return <Job job={i.job} jd={i.jd} require={i.require} applyAt={i.applyAt} />
                    })
                }
                <div class="information-container">
                    <div>Mọi thắc mắc xin vui lòng liên hệ qua:</div>
                    <div class="information-list">
                        <div class="information">Hotline tuyển dụng: 024 62660304</div>
                        <div class="information">Mail: <span style={{color: "blue"}}>tuyendung@viettelpost.com.vn</span></div>
                    </div>
                    <div>Trân trọng!</div>
                </div>    
            </div>
        </div>
    );
}

export default MainContent;