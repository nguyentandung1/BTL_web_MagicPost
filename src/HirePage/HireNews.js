import '../ActivityNews/Content.css'
import {Link, Button} from "@material-ui/core"
import hirenews1 from './images/hirenews1.jpg'
import hirenews2 from './images/hirenews2.jpg'
import hirenews3 from './images/hirenews3.jpg'

function HireNews() {
    const hireNewsList = [
        {
            "news": hirenews1,
            "header": "Magic Post hires Supply Chain Management Solution Engineer/Architect",
            "time": "28/05/2021 10:45",
        },
        {
            "news": hirenews2,
            "header": "Magic Post tuyển dụng Quản trị dự án",
            "time": "26/05/2021 14:18",
        },
        {
            "news": hirenews3,
            "header": "Magic Post tuyển dụng Trưởng sản phẩm",
            "time": "26/05/2021 14:12",
        },
    ]
    return (
        <div id="related-news-container">
        <div id="related-news-header">Tin Tuyển Dụng HOT</div>
        <ul>
            {
                hireNewsList.map(i => {
                    return <li> 
                                <img src={i.news} style={{width: "100%"}} alt="$i.news" />
                                <Link class="hirenews" style={{ textDecoration: 'none', color: "black" }}>{i.header}</Link>
                                <div>{i.time}</div>
                            </li>    
                })
            }
        </ul>
        <Button id="news-button" fullWidth>Xem thêm</Button>
    </div>
    );
}

export default HireNews;