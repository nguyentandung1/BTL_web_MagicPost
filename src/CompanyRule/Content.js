import '../ActivityNews/Content.css'
import news1 from './images/news1.jpg'
import news2 from './images/news2.jpg'
import news3 from './images/news3.jpg'
import news4 from './images/news4.jpg'
import news5 from './images/news5.jpg'
import news6 from './images/news6.jpg'
import news7 from './images/news7.jpg'
import news8 from './images/news8.jpg'
import news9 from './images/news9.jpg'
import {Grid, Link, Button} from '@material-ui/core'
import { useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NewsContent from '../ActivityNews/NewsContent'
import RelatedNews from '../ActivityNews/RelatedNews'

function Content({serviceName}) {
    var contentList = [
        {
            "news": news2,
            "header": "Điều lệ Tổng Công ty tháng 12/2019",
            "body": "Điều lệ MagicPost sau khi phát hành thành công ESOP 2019. Vui lòng click vào đây để theo dõi.",
            "time": "26/12/2019",
            "overlay": "Điều lệ Tổng Công ty tháng 12/2019",
        },
        {
            'news': news3,
            "header": "CBTT Giấy chứng nhận đăng ký doanh nghiệp thay đổi lần thứ 16",
            "body": "GCN dang ky doanh nghiep lan thu 16-đã nén",
            "time": "15/07/2019",
            "overlay": "CBTT Giấy chứng nhận đăng ký doanh nghiệp thay đổi lần thứ 16",
        },
        {
            'news': news4,
            "header": "Điều lệ TCT đã cập nhật vốn điều lệ năm 2019",
            "body": "Kính mời theo dõi TẠI ĐÂY.    ",
            "time": "27/06/2019",
            "overlay": "Điều lệ TCT đã cập nhật vốn điều lệ năm 2019",
        },
        {
            'news': news5,
            "header": "TB chi trả cổ tức năm 2018 bằng tiền (đối với cổ đông chưa lưu ký chứng khoán)",
            "body": "Kính gửi Quý cổ đông (đối với cổ đông chưa lưu ký chứng khoán tại công ty chứng khoán), Lời đầu tiên, Tổng Công ty gửi lời chào trân trọng nhất tới Quý Cổ đông. [...]",
            "time": "13/06/2019",
            "overlay": "TB chi trả cổ tức năm 2018 bằng tiền (đối với cổ đông chưa lưu ký chứng khoán)",
        },
        {
            'news': news6,
            "header": "Điều lệ MagicPost theo Đại hội thường niên 2019",
            "body": "Dieu le MagicPost",
            "time": "20/04/2019",
            "overlay": "Điều lệ MagicPost theo Đại hội thường niên 2019",
        },
        {
            'news': news7,
            "header": "Điều lệ tổ chức và hoạt động của Tổng Công ty (cập nhật 20/10/2018)",
            "body": "MagicPost công bố Điều lệ tổ chức và hoạt động của Tổng Công ty (cập nhật 20/10/2018). Vui lòng xem chi tiết TẠI ĐÂY.",
            "time": "20/10/2018",
            "overlay": "Điều lệ tổ chức và hoạt động của Tổng Công ty (cập nhật 20/10/2018)",
        },
        {
            'news': news8,
            "header": "Điều lệ Tổng Công ty theo vốn 413 tỷ (cập nhật 9/2018)",
            "body": "MagicPost công bố Điều lệ Tổng Công ty theo vốn 413 tỷ (cập nhật 8/2018). Vui lòng xem chi tiết TẠI ĐÂY.",
            "time": "20/09/2018",
            "overlay": "Điều lệ Tổng Công ty theo vốn 413 tỷ (cập nhật 9/2018)",
        },
        {
            'news': news9,
            "header": "Điều lệ MagicPost – Năm 2017",
            "body": "MagicPost công bố Điều lệ năm 2017.  Vui lòng xem chi tiết TẠI ĐÂY.",
            "time": "27/04/2017",
            "overlay": "Điều lệ MagicPost – Năm 2017",
        },
    ]

    const [newsFull, setNewsFull] = useState(false);
    const [shownContentList, setShownContentList] = useState(contentList.slice(0,4));

    const moreNews = () => {
        let length = shownContentList.length;
        if (length + 4 >= contentList.length) {
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
                        <Link href="/companyrule2019">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    Điều lệ Tổng Công ty sau khi phát hành cổ phiếu để trả cổ tức năm 2019
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 09/09/2020</div>
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
                    <RelatedNews type={"shareholders"} />
                </Grid>
                <Grid item md={2} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;