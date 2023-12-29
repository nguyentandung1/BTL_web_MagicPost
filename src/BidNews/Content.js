import '../ActivityNews/Content.css'
import news1 from './images/news1.jpg'
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
            "header": "Gói thầu Cung cấp pallet nhựa năm 2020",
            "body": "Ngày đăng: 28/6/2020 Kính gửi: MagicPost có nhu cầu lựa chọn nhà thầu  “Gói thầu Cung cấp pallet nhựa năm 2020” theo thông tin như sau: Tên gói [...]",
            "time": "28/06/2020",
            "overlay": "Gói thầu Cung cấp pallet nhựa năm 2020",
        },
        {
            'news': news3,
            "header": "Kết quả gói thầu cung cấp dịch vụ bảo hiểm kết hợp con người cho CBCNV năm 2020",
            "body": "Ngày đăng: 29/05/2020 Kính gửi: Các nhà thầu Tổng công ty cổ phần Bưu chính Viettel thông báo kết quả gói thầu cung cấp dịch vụ bảo hiểm kết hợp con người cho CBCNV năm [...]",
            "time": "29/05/2020",
            "overlay": "Kết quả gói thầu cung cấp dịch vụ bảo hiểm kết hợp con người cho CBCNV năm 2020",
        },
        {
            'news': news4,
            "header": "Gói thầu Cung cấp túi chở hàng Quý I năm 2020",
            "body": "Ngày đăng: 27/04/2020 Kính gửi: Các nhà thầu Tổng công ty cổ phần Bưu chính Viettel có nhu cầu mua sắm túi chở hàng cho Tổng công ty theo thông tin như sau: Tên gói [...]",
            "time": "27/04/2020",
            "overlay": "Gói thầu Cung cấp túi chở hàng Quý I năm 2020",
        },
        {
            'news': news5,
            "header": "Cung cấp dịch vụ hỗ trợ kinh doanh 2019",
            "body": "Kính gửi: MagicPost có nhu cầu cung cấp dịch vụ hỗ trợ kinh doanh 2019 theo thông tin như sau: Tên gói thầu: Cung cấp [...]",
            "time": "16/11/2019",
            "overlay": "Cung cấp quà tặng khách hàng nhân dịp Tết Nguyên đán năm 2020",
        },
        {
            'news': news6,
            "header": "Cung cấp quà tặng khách hàng nhân dịp Tết Nguyên đán năm 2020",
            "body": "Ngày đăng: 16/11/2019 Kính gửi: MagicPost có nhu cầu lựa chọn nhà thầu cung cấp hộp quà tết nguyên đán 2020 theo thông tin như [...]",
            "time": "16/11/2019",
            "overlay": "Cung cấp quà tặng khách hàng nhân dịp Tết Nguyên đán năm 2020",
        },
        {
            'news': news7,
            "header": "In lịch tặng khách hàng nhân dịp Tết dương lịch năm 2020",
            "body": "Ngày đăng: 14/11/2019 Kính gửi: MagicPost có nhu cầu lựa chọn nhà cung cấp lịch tết 2019 theo thông tin như sau: Tên gói thầu: [...]",
            "time": "14/11/2019",
            "overlay": "In lịch tặng khách hàng nhân dịp Tết dương lịch năm 2020",
        },
        {
            'news': news8,
            "header": "Gói thầu máy quét mã vạch có dây quý III năm 2019",
            "body": "Ngày đăng: 27/08/2019 Kính gửi: MagicPost có nhu cầu mua sắm máy quét mã vạch có dây mặt  cho Tổng công ty theo thông tin [...]",
            "time": "27/08/2019",
            "overlay": "Gói thầu máy quét mã vạch có dây quý III năm 2019",
        },
        {
            'news': news9,
            "header": "Gói thầu khám sức khỏe cho CBNV năm 2019",
            "body": "Ngày đăng: 24/08/2019 Kính gửi: MagicPost có nhu cầu khám sức khỏe cho CBNV  Tổng công ty theo thông tin như sau: Tên gói thầu: [...]",
            "time": "24/08/2019",
            "overlay": "Gói thầu khám sức khỏe cho CBNV năm 2019",
        },
        {
            'news': news10,
            "header": "Mua sắm quà tặng tri ân khách hàng nhân dịp Tết Trung thu năm 2019",
            "body": "Ngày đăng: 26/07/2019 Kính gửi: MagicPost có nhu cầu mua sắm hộp bánh trung thu năm 2019 theo thông tin như sau: Tên gói thầu: [...]",
            "time": "26/07/2019",
            "overlay": "Mua sắm quà tặng tri ân khách hàng nhân dịp Tết Trung thu năm 2019",
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
                        <Link href="/chohangquy3">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    Cung cấp túi chở hàng Quý III năm 2020
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 14/08/2020</div>
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
                    <RelatedNews type="news" />
                </Grid>
                <Grid item md={2} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;