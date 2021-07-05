import './Content.css'
import {Button, Link} from '@material-ui/core'

function RelatedNews({type}) {
    var relatedNewsList = [];
    if (type === "news") {
        relatedNewsList = [
            {
                'header': 'Thông báo chi trả cổ tức năm 2020',
                'time': '25/06/2021 13:42',
            },
            {
                'header': 'Nghìn đơn không khó, đã có Viettel Sale lo!',
                'time': '24/06/2021 13:34',
            },
            {
                'header': 'Đưa nông sản Việt ra quốc tế bằng con đường “xuyên biên giới”',
                'time': '24/06/2021 09:52',
            },
            {
                'header': 'Viettel Post TẶNG VOUCHER GIẢM 5K cho đơn hàng có cước phí chuyển phát trên 30K',
                'time': '16/06/2021 15:15',
            },
            {
                'header': 'CẢNH BÁO DỮ LIỆU BẤT THƯỜNG khi tạo đơn trên website Viettelpost.vn',
                'time': '16/06/2021 11:23',
            },
            {
                'header': 'CƠ HỘI VÀNG NHẬN NGAY 500 TRIỆU ĐỒNG VỐN KINH DOANH',
                'time': '12/06/2021 06:30',
            },
            {
                'header': 'Thông báo chốt danh sách cổ đông nhận cổ tức bằng tiền và bằng cổ phiếu năm 2020',
                'time': '09/06/2021 20:43',
            },
            {
                'header': 'Viettel Post TUYỂN DỤNG nhiều vị trí – THU NHẬP tới 20 TRIỆU/tháng',
                'time': '02/06/2021 10:10',
            },
        ]
    }
    else if (type === "shareholders") {
        relatedNewsList = [
            {
                'header': "Chào mừng 24 năm thành lập Tổng Công ty Cổ phần Bưu chính Viettel",
                "time": "30/06/2021 14:52",
            },
            {
                'header': "Báo cáo kết quả phát hành cổ phiếu để trả cổ tức năm 2020",
                "time": "30/06/2021 10:48",
            },
            {
                'header': "CBTT thay đổi số lượng cổ phần có quyền biểu quyết",
                "time": "29/06/2021 16:53",
            },
            {
                'header': "Thông báo chi trả cổ tức năm 2020",
                "time": "25/06/2021 13:42",
            },
            {
                'header': "Nghìn đơn không khó, đã có Viettel Sale lo!",
                "time": "24/06/2021 13:34",
            },
            {
                'header': "Đưa nông sản Việt ra quốc tế bằng con đường “xuyên biên giới”",
                "time": "24/06/2021 09:52",
            },
            {
                'header': "Viettel Post TẶNG VOUCHER GIẢM 5K cho đơn hàng có cước phí chuyển phát trên 30K",
                "time": "16/06/2021 15:15",
            },
            {
                'header': "CẢNH BÁO DỮ LIỆU BẤT THƯỜNG khi tạo đơn trên website Viettelpost.vn",
                "time": "16/06/2021 11:23",
            },
        ]
    }

    return (
    <div id="related-news-container">
        <div id="related-news-header">TIN TỨC LIÊN QUAN</div>
        <ul>
            {
                relatedNewsList.map(i => {
                    return <li>
                                <Link class="news" style={{ textDecoration: 'none', color: "black" }}>{i.header}</Link>
                                <span>{i.time}</span>
                            </li>    
                })
            }
        </ul>
        <Button id="news-button" fullWidth>Xem thêm</Button>
    </div>
    );
}

export default RelatedNews;