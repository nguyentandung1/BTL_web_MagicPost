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
            'header': "Biên bản và Nghị quyết Đại hội đồng cổ đông thường niên năm 2021",
            'body': "MagicPost trân trọng công bố thông tin Biên bản và Nghị quyết Đại hội đồng cổ đông thường niên năm 2021, chi tiết vui lòng theo dõi tại [...]",
            'time': "25/04/2021",
            'overlay': "Biên bản và Nghị quyết Đại hội đồng cổ đông thường niên năm 2021",
        },
        {
            'news': news3,
            'header': "Thông báo mời họp và tài liệu Đại hội đồng cổ đông thường niên năm 2021",
            'body': "MagicPost trân trọng kính mời Quý cổ đông tham dự Đại hội đồng cổ đông thường niên năm 2021, chi tiết như sau: – Thời gian tổ chức: [...]",
            'time': "02/04/2021",
            'overlay': "Thông báo mời họp và tài liệu Đại hội đồng cổ đông thường niên năm 2021",
        },
        {
            'news': news4,
            'header': "Thông báo chốt danh sách cổ đông tham dự ĐHĐCĐ thường niên năm 2021",
            'body': "MagicPost trân trọng công bố thông tin thông báo chốt danh sách cổ đông tham dự ĐHĐCĐ thường niên năm 2021 gửi VSD, vui lòng theo dõi tại [...]",
            'time': "12/03/2021",
            'overlay': "Thông báo chốt danh sách cổ đông tham dự ĐHĐCĐ thường niên năm 2021",
        },
        {
            'news': news5,
            'header': "NQ HĐQT về việc triệu tập ĐHĐCĐ thường niên năm 2021",
            'body': "MagicPost trân trọng công bố thông tin triệu tập ĐHĐCĐ thường niên năm 2021, vui lòng theo dõi tại đây.",
            'time': "08/03/2021",
            'overlay': "NQ HĐQT về việc triệu tập ĐHĐCĐ thường niên năm 2021",
        },
        {
            'news': news6,
            'header': "Thông báo về ngày giao dịch đầu tiên đối với cổ phiếu là cổ tức năm 2019",
            'body': "MagicPost trân trọng thông báo về ngày giao dịch đầu tiên đối với cổ phiếu là cổ tức năm 2019. Vui lòng click vào đây để theo dõi.",
            'time': "21/09/2020",
            'overlay': "Thông báo về ngày giao dịch đầu tiên đối với cổ phiếu là cổ tức năm 2019",
        },
        {
            'news': news7,
            'header': "Công văn của UBCKNN chấp thuận báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2019",
            'body': "MagicPost trân trọng công bố công văn của UBCKNN chấp thuận báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2019, vui lòng click [...]",
            'time': "10/09/2020",
            'overlay': "Công văn của UBCKNN chấp thuận báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2019",
        },
        {
            'news': news8,
            'header': "Thông báo thay đổi số lượng cổ phần có quyền biểu quyết đang lưu hành",
            'body': "MagicPost trân trọng thông báo thay đổi số lượng cổ phần có quyền biểu quyết đang lưu hành, chi tiết vui lòng click vào đây để theo dõi.",
            'time': "03/09/2020",
            'overlay': "Thông báo thay đổi số lượng cổ phần có quyền biểu quyết đang lưu hành",
        },
        {
            'news': news9,
            'header': "Báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2019",
            'body': "MagicPost trân trọng thông báo kết quả phát hành cổ phiếu để trả cổ tức năm 2019, chi tiết vui lòng click vào đây để theo dõi.",
            'time': "03/09/2020",
            'overlay': "Báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2019",
        },
        {
            'news': news10,
            'header': "Thông báo chi trả cổ tức năm 2019 bằng tiền và bằng cổ phiếu",
            'body': "Kính gửi Quý Cổ đông, Lời đầu tiên, Tổng Công ty gửi lời chào trân trọng nhất tới Quý Cổ đông. Tổng Công ty trân trọng thông báo chi trả cổ tức năm 2019 bằng [...]",
            'time': "29/08/2020",
            'overlay': "Thông báo chi trả cổ tức năm 2019 bằng tiền và bằng cổ phiếu",
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
                        <Link href="/bonhiemchutich">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    CBTT bổ nhiệm Chủ tịch HĐQT nhiệm kỳ 2019 – 2024
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 25/04/2021</div>
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