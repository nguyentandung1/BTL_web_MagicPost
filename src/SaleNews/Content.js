import '../ActivityNews/Content.css'
import news1 from './images/news1.png'
import news2 from './images/news2.jpg'
import news3 from './images/news3.jpg'
import news4 from './images/news4.jpg'
import news5 from './images/news5.png'
import news6 from './images/news6.jpg'
import news7 from './images/news7.jpg'
import news8 from './images/news8.jpg'
import news9 from './images/news9.jpg'
import news10 from './images/news10.jpg'
import {Grid, Link, Button} from '@material-ui/core'
import { useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NewsContent from '../ActivityNews/NewsContent'
import RelatedNews from '../ActivityNews/RelatedNews'

function Content({serviceName}) {
    var contentList = [
        {
            "news": news2,
            'header': "MagicPost TẶNG VOUCHER GIẢM 5K cho đơn hàng có cước phí chuyển phát trên 30K",
            'body': "Cả tuần gửi hàng - Nhận ưu đãi vàng TẶNG VOUCHER GIẢM 5K cho đơn hàng có cước phí chuyển phát trên 30K  Nhằm tri ân các quý khách hàng đã tin tưởng sử dụng [...]",
            'time': "16/06/2021",
            'overlay': "MagicPost TẶNG VOUCHER GIẢM 5K cho đơn hàng có cước phí chuyển phát trên 30K",
        },
        {
            'news': news3,
            'header': "CƠ HỘI VÀNG NHẬN NGAY 500 TRIỆU ĐỒNG VỐN KINH DOANH",
            'body': "*Lưu ý: Trong thời gian từ 12/06-22/06/2021 dịch vụ “Ứng vốn kinh doanh” triển khai thí điểm cho các khách hàng tại khu vực Hà Nội Là một nhà kinh doanh online, chắc hẳn bạn [...]",
            'time': "12/06/2021",
            'overlay': "CƠ HỘI VÀNG NHẬN NGAY 500 TRIỆU ĐỒNG VỐN KINH DOANH",
        },
        {
            'news': news4,
            'header': "Tặng ngay tiền khi lựa chọn MagicPost làm đơn vị vận chuyển",
            'body': "Nhằm nâng cao chất lượng và khuyến khích việc mua sắm trực tuyến, MagicPost và Voso tưng bừng triển khai chương trình LỰA CHỌN VIETTEL POST - NHẬN TIỀN LIỀN TAY Cụ thể: - [...]",
            'time': "24/05/2021",
            'overlay': "Tặng ngay tiền khi lựa chọn MagicPost làm đơn vị vận chuyển",
        },
        {
            'news': news5,
            'header': "Gửi hàng ĐỒNG GIÁ 24K cùng MagicPost",
            'body': "MagicPost tự hào là đơn vị vận chuyển uy tín sẵn sàng đồng hành cùng Qúy khách hàng mọi lúc mọi nơi. Nhằm tri ân Qúy khách hàng đã tin tưởng sử dụng dịch [...]",
            'time': "19/05/2021",
            'overlay': "Gửi hàng ĐỒNG GIÁ 24K cùng MagicPost",
        },
        {
            'news': news6,
            'header': "MagicPost thông báo chương trình tặng voucher giảm 10.000 vnđ/ đơn hàng",
            'body': "MagicPost rất vinh dự khi được đồng hành cùng khách hàng trong thời gian qua. Để tri ân, chúng tôi tặng bạn voucher 10k cho mỗi đơn hàng. Đặc biệt, mỗi khách hàng sẽ [...]",
            'time': "11/05/2021",
            'overlay': "MagicPost thông báo chương trình tặng voucher giảm 10.000 vnđ/ đơn hàng",
        },
        {
            'news': news7,
            'header': "MUA 2 TẶNG 1, CHỈ CÓ THỂ LÀ MagicPost",
            'body': "Chỉ áp dụng với các khách hàng nhận được tin nhắn (số điện thoại là số đăng ký tài khoản app MagicPost) 👉Tải app MagicPost: https://appMagicPost.page.link/superapp Khi gửi 2 đơn hàng thành công [...]",
            'time': "18/03/2021",
            'overlay': "MUA 2 TẶNG 1, CHỈ CÓ THỂ LÀ MagicPost",
        },
        {
            'news': news8,
            'header': "MagicPost TẶNG VOUCHER GIẢM 10K CƯỚC CHUYỂN PHÁT",
            'body': "Chỉ áp dụng với các khách hàng nhận được tin nhắn (số điện thoại là số đăng ký tài khoản app MagicPost) 👉Tải app MagicPost: https://appMagicPost.page.link/superapp MagicPost rất vinh dự khi được [...]",
            'time': "18/03/2021",
            'overlay': "MagicPost TẶNG VOUCHER GIẢM 10K CƯỚC CHUYỂN PHÁT",
        },
        {
            'news': news9,
            'header': "ĐỒNG HÀNH CÙNG KHÁCH HÀNG VƯỢT MÙA COVID, MagicPost GIẢM ĐẾN 30% CƯỚC PHÍ CHUYỂN PHÁT",
            'body': "Chỉ áp dụng với các khách hàng nhận được tin nhắn (số điện thoại là số đăng ký tài khoản app MagicPost) 👉Tải app MagicPost: https://appMagicPost.page.link/superapp Tặng voucher giảm đến 30% cước phí [...]",
            'time': "18/03/2021",
            'overlay': "ĐỒNG HÀNH CÙNG KHÁCH HÀNG VƯỢT MÙA COVID, MagicPost GIẢM ĐẾN 30% CƯỚC PHÍ CHUYỂN PHÁT",
        },
        {
            'news': news10,
            'header': "MagicPost cùng Voso giúp Nông sản Việt thoát cảnh “giải cứu”",
            'body': "Do ảnh hưởng từ dịch Covid-19, hàng nghìn hecta nông sản của bà con nông dân tại tỉnh Hải Dương đã đến vụ thu hoạch nhưng không thể bán ra như mọi năm. Do tuân [...]",
            'time': "04/03/2021",
            'overlay': "MagicPost cùng Voso giúp Nông sản Việt thoát cảnh “giải cứu”",
        },
    ]

    const [newsFull, setNewsFull] = useState(false);
    const [shownContentList, setShownContentList] = useState(contentList.slice(0,4));

    const moreNews = () => {
        let length = shownContentList.length;
        if (length + 4 > contentList.length) {
            setNewsFull(true);
            setShownContentList(shownContentList.concat(contentList.slice(length, contentList.length)));
            return ;
        }
        setShownContentList(shownContentList.concat(contentList.slice(length, length+4)));
    }

    return (
        <div id="content-container">
            <Grid container>
                <Grid item md={2} sm={false} xs={false}></Grid>
                <Grid item md={5} sm={8} xs={12}>
                    <div id="image-link-container">
                        <Link href="/khuyenmai">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    Nghìn đơn không khó, đã có Viettel Sale lo!
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 02/06/2021</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div id="news-wrapper">
                        {
                            shownContentList.map(i => {
                                return <NewsContent header={i.header} body={i.body} time={i.time} news={i.news} overlay={i.overlay} />
                            })
                        }
                    </div>
                    {
                        newsFull === false && <Button onClick={moreNews} id="news-button" fullWidth>Xem thêm</Button>                
                    }
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <RelatedNews type="news"/>
                </Grid>
                <Grid item md={2} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;