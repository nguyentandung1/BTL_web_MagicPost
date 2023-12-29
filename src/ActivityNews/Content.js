import './Content.css'
import news1 from './images/news1.jpg'
import news2 from './images/news2.jpg'
import news3 from './images/news3.jpg'
import news4 from './images/news4.jpg'
import news5 from './images/news5.jpg'
import news6 from './images/news6.jpg'
import news7 from './images/news7.jpg'
import news8 from './images/news8.png'
import news9 from './images/news9.jpg'
import news10 from './images/news10.jpg'
import {Grid, Link, Button} from '@material-ui/core'
import { useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NewsContent from './NewsContent'
import RelatedNews from './RelatedNews'

function Content({serviceName}) {
    var contentList = [
        {
            "news": news2,
            'header': "Magic Post thông báo THỜI GIAN PHỤC VỤ KHÁCH HÀNG dịp Tết Nguyên Đán 2021",
            'body': "Kính gửi: Quý Khách hàng, Lời đầu tiên, Magic Post xin gửi tới Quý khách hàng những lời tri ân sâu sắc nhất, cảm ơn Quý khách hàng đã [...]",
            'time': "05/02/2021",
            'overlay': "Magic Post thông báo THỜI GIAN PHỤC VỤ KHÁCH HÀNG dịp Tết Nguyên Đán 2021",
        },
        {
            'news': news3,
            'header': "Dịch vụ giao hàng tiết kiệm Nghệ An của Magic Post và những ưu điểm vượt trội",
            'body': "Dịch vụ Giao hàng tiết kiệm Nghệ An của Magic Post  ra đời nhằm đáp ứng nhu cầu vận chuyển đang phát triển với tốc độ chóng mặt của người dân và các doanh nghiệp [...]",
            'time': "07/01/2020",
            'overlay': 'Dịch vụ giao hàng tiết kiệm Nghệ An của Magic Post và những ưu điểm vượt trội',
        },
        {
            'news': news4,
            'header': "Dịch vụ giao hàng tiết kiệm Vĩnh Phúc của Magic Post và những điều cần biết",
            'body': "Dịch vụ giao hàng tiết kiệm Vĩnh Phúc trực thuộc Magic Post ra đời để phục vụ cho nhu cầu vận chuyển hàng hóa ngày càng tăng cao của người dân địa phương Giao [...]",
            'time': "07/01/2020",
            'overlay': 'Dịch vụ giao hàng tiết kiệm Vĩnh Phúc của Magic Post và những điều cần biết',
        },
        {
            'news': news5,
            'header': "Dịch vụ giao hàng tiết kiệm Điện Biên của Magic Post – an toàn, tiện lợi",
            'body': "Dịch vụ Giao hàng tiết kiệm Điện Biên của bưu chính Magic không chỉ an toàn, tiện lợi mà chi phí còn phù hợp với thu nhập của đông đảo người dân nơi đây. Dịch vụ [...]",
            'time': "07/01/2020",
            'overlay': 'Dịch vụ giao hàng tiết kiệm Điện Biên của Magic Post – an toàn, tiện lợi',
        },
        {
            'news': news6,
            'header': "Dịch vụ giao hàng tiết kiệm Tuyên Quang của Magic Post và những ưu điểm vượt trội",
            'body': "Dịch vụ giao hàng tiết kiệm Tuyên Quang của bưu chính Magic chiếm lĩnh được sự tin tưởng của người dân và doanh nghiệp tại nơi đây nhờ có rất nhiều ưu điểm vượt trội. [...]",
            'time': "07/01/2020",
            'overlay': 'Dịch vụ giao hàng tiết kiệm Tuyên Quang của Magic Post và những ưu điểm vượt trội',
        },
        {
            'news': news7,
            'header': "Lắc Magic Post, trúng ngàn QUÀ hot!",
            'body': "LẮC MAGICPOST, TRÚNG NGÀN QUÀ HOT! Tải app chơi game: http://bit.ly/taiapplactay5 Thời gian: Từ ngày 01/01/2020 đến ngày 14/01/2020 Thể lệ: Cứ 3 đơn hàng tạo thành công và được chuyển sang trạng thái “đang [...]",
            'time': "31/12/2019",
            'overlay': 'Lắc Magic Post, trúng ngàn QUÀ hot!',
        },
        {
            'news': news8,
            'header': "THÔNG BÁO LỊCH LÀM VIỆC ĐỢT NGHỈ LỄ 30/4 – 1/5",
            'body': "THÔNG BÁO LỊCH LÀM VIỆC ĐỢT NGHỈ LỄ 30/4 - 1/5 Nhằm đáp ứng nhu cầu gửi hàng hóa trong dịp nghỉ lễ Giải phóng miền Nam và Quốc tế Lao động, Magic Post trân [...]",
            'time': "25/04/2019",
            'overlay': 'THÔNG BÁO LỊCH LÀM VIỆC ĐỢT NGHỈ LỄ 30/4 – 1/5',
        },
        {
            'news': news9,
            'header': "Ra mắt ứng dụng giao hàng MagicPost phiên bản mới tích hợp trí tuệ nhân tạo",
            'body': "Phiên bản ứng dụng MagicPost mới ra mắt được tích hợp trí tuệ nhân tạo (AI) có khả năng ghi nhớ thông tin đơn hàng, cập nhật dữ liệu hàng hóa, phân tích các nội [...]",
            'time': "29/01/2019",
            'overlay': 'Ra mắt ứng dụng giao hàng MagicPost phiên bản mới tích hợp trí tuệ nhân tạo',
        },
        {
            'news': news10,
            'header': "Magic Post thực hiện mobile hóa 100% hoạt động chuyển phát",
            'body': "Nhờ thực hiện mobile hóa 100% hoạt động chuyển phát, hiện nay khách hàng của Viettel Post đã có thể tạo đơn hàng, tìm kiếm bưu cục, tra cứu vận đơn, thanh toán tự động, [...]",
            'time': "29/01/2019",
            'overlay': 'Magic Post thực hiện mobile hóa 100% hoạt động chuyển phát',
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
                        <Link href="/tuyendung">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    Viettel Post TUYỂN DỤNG nhiều vị trí – THU NHẬP tới 20 TRIỆU/tháng
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 24/06/2021</div>
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