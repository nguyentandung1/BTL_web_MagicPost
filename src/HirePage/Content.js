import '../ActivityNews/Content.css'
import banner from './images/banner.jpg'
import news1 from './images/news1.jpg'
import news2 from './images/news2.jpg'
import news3 from './images/news3.jpg'
import news4 from './images/news4.jpg'
import news5 from './images/news5.jpg'
import news6 from './images/news6.png'
import news7 from './images/news7.png'
import news8 from './images/news8.png'
import news9 from './images/news9.png'
import news10 from './images/news10.png'
import {Grid, Link, Button} from '@material-ui/core'
import { useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NewsContent from '../ActivityNews/NewsContent'
import JobSearchBar from './JobSearchBar'
import HireNews from './HireNews'

function Content({serviceName}) {
    var contentList = [
        {
            "news": news2,
            'header': "Magic Post tuyển dụng Quản trị dự án",
            'body': "Magic Post tuyển dụng Quản trị dự án  Quyền lợi: Được làm những dự án dẫn đầu về xu hướng Ecommerce (Thương mại điện tử), Logistics (Kho Vận) và SupplyChain (Chuỗi cung ứng) Tham gia [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Quản trị dự án",
        },
        {
            "news": news3,
            'header': "Magic Post tuyển dụng Trưởng sản phẩm",
            'body': "Magic Post tuyển dụng Trưởng sản phẩm Quyền lợi: Được đóng bảo hiểm sức khỏe đầy đủ Lương thỏa thuận Chế độ đãi ngộ khác: thưởng lễ, thưởng tết, trợ cấp, du lịch/nghỉ mát hàng [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Trưởng sản phẩm",
        },
        {
            'news': news4,
            'header': "Magic Post tuyển dụng Chuyên viên phát triển Backend",
            'body': "Magic Post tuyển dụng Chuyên viên phát triển Backend Quyền lợi: Được đóng bảo hiểm sức khỏe đầy đủ Chế độ lương cạnh tranh hấp dẫn Chế độ đãi ngộ khác: thưởng lễ, thưởng tết, [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Chuyên viên phát triển Backend",
        },
        {
            'news': news5,
            'header': "Magic Post tuyển dụng Chuyên viên phát triển Frontend",
            'body': "Magic Post tuyển dụng Chuyên viên phát triển Frontend Quyền lợi: Được đóng bảo hiểm sức khỏe đầy đủ Chế độ đãi ngộ khác: thưởng lễ, thưởng tết, trợ cấp, du lịch/nghỉ mát hàng năm [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Chuyên viên phát triển Frontend",
        },
        {
            'news': news6,
            'header': "Magic Post tuyển dụng System Engineer/Architect",
            'body': "Magic Post tuyển dụng System Engineer/Architect Quyền lợi: Lương thỏa thuận theo năng lực Làm việc cùng đội ngũ lập trình giỏi chuyên môn, nhiều kinh nghiệm Liên tục được đào tạo về kiến thức, [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng System Engineer/Architect",
        },
        {
            'news': news7,
            'header': "Magic Post tuyển dụng Kiến trúc sư kỹ thuật",
            'body': "Magic Post tuyển dụng Kiến trúc sư kỹ thuật (Technical Architect - Java, Python) Quyền lợi: Được đóng bảo hiểm sức khỏe đầy đủ Chế độ lương cạnh tranh Chế độ đãi ngộ khác: thưởng [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Kiến trúc sư kỹ thuật",
        },
        {
            'news': news8,
            'header': "Magic Post tuyển dụng Big Data Architect Expert",
            'body': "Magic Post tuyển dụng Chuyên gia phân tích dữ liệu lớn Quyền lợi: Tham gia vào quá trình chuyển đổi số của doanh nghiệp Môi trường trẻ trung, năng động, cởi mở với nhiều thử [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Big Data Architect Expert",
        },
        {
            'news': news9,
            'header': "Magic Post tuyển dụng Big Data Engineer/Architect",
            'body': "Magic Post tuyển dụng Big Data Engineer/Architect (Java/ Python/ Scala) Quyền lợi: Tham gia vào quá trình chuyển đổi số của doanh nghiệp Môi trường trẻ trung, năng động, cởi mở với nhiều thử thách [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Big Data Engineer/Architect",
        },
        {
            'news': news10,
            'header': "Magic Post tuyển dụng Chuyên viên tối ưu vận hành kho",
            'body': "Magic Post tuyển dụng Chuyên viên tối ưu Vận hành kho (Warehouse Optimization Specialist) Quyền lợi: Được đóng bảo hiểm sức khỏe đầy đủ Chế độ đãi ngộ khác: thưởng lễ, thưởng tết, trợ cấp, [...]",
            'time': "26/05/2021",
            'overlay': "Magic Post tuyển dụng Chuyên viên tối ưu vận hành kho",
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
                <Grid item md={5} sm={9} xs={12}>
                    <div id="banner-container">
                        <img src={banner} alt="banner" style={{width: "95%"}} />
                        <div id="banner-text">
                            <b style={{fontSize: "18px"}}>Tuyển dụng Magic Post</b>
                            <div>Magic Post luôn sẵn sàng chào đón những con người có tài năng, trí tuệ và lòng say mê công việc để cùng nhau tạo ra những sản phẩm số 1 trên thị trường.</div>
                            <Link href="/" style={{color: "white"}}>Xem thêm</Link>
                        </div>
                    </div>
                    <JobSearchBar />
                    <div id="image-link-container">
                        <Link href="/khuyenmai">
                            <img id="image-link" src={news1} alt="news1" />
                            <div id="image-link-text-container">
                                <div id="image-link-text">
                                    Magic Post tuyển dụng IT System Admin
                                    <div style={{marginTop: "0.2vw", fontWeight: "normal"}}><AccessTimeIcon /> 26/05/2021</div>
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
                <Grid item md={2} sm={3} xs={12}>
                    <HireNews />
                </Grid>
                <Grid item md={3} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;