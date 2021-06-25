import './Content.css'

function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <br />
                <table id="content-table">
                    <tr id="red-row">
                        <th>Nội dung</th>
                        <th>Trọng lượng</th>
                        <th>ZONE 1</th>
                        <th>ZONE 2</th>
                        <th>ZONE 3</th>
                        <th>ZONE 4</th>
                        <th>ZONE 5</th>
                        <th>ZONE 6</th>
                        <th>ZONE 7</th>
                        <th>ZONE 8</th>
                        <th>ZONE 9</th>
                        <th>ZONE 10</th>
                        <th>ZONE 11</th>
                    </tr>
                    <tr id="time-row">
                        <td rowSpan="5">Tài liệu</td>
                        <td>Thời gian</td>
                        <td>1-2 ngày</td>
                        <td>2-3 ngày</td>
                        <td>2-3 ngày</td>
                        <td>3-4 ngày</td>
                        <td>3-4 ngày</td>
                        <td>2-3 ngày</td>
                        <td>2-3 ngày</td>
                        <td>2-3 ngày</td>
                        <td>3-4 ngày</td>
                        <td>4-6 ngày</td>
                        <td>5-7 ngày</td>
                    </tr>
                    <tr>
                        <td>0.5</td>
                        <td>264,000</td>
                        <td>264,000</td>
                        <td>336,000</td>
                        <td>539,000</td>
                        <td>553,000</td>
                        <td>580,000</td>
                        <td>630,000</td>
                        <td>638,000</td>
                        <td>758,000</td>
                        <td>716,000</td>
                        <td>970,000</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>344,000</td>
                        <td>344,000</td>
                        <td>452,000</td>
                        <td>648,000</td>
                        <td>667,000</td>
                        <td>722,000</td>
                        <td>785,000</td>
                        <td>795,000</td>
                        <td>955,000</td>
                        <td>892,000</td>
                        <td>1,172,000</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>500,000</td>
                        <td>500,000</td>
                        <td>629,000</td>
                        <td>758,000</td>
                        <td>782,000</td>
                        <td>865,000</td>
                        <td>939,000</td>
                        <td>952,000</td>
                        <td>1,142,000</td>
                        <td>1,068,000</td>
                        <td>1,374,000</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>589,000</td>
                        <td>589,000</td>
                        <td>778,000</td>
                        <td>867,000</td>
                        <td>896,000</td>
                        <td>1,008,000</td>
                        <td>1,097,000</td>
                        <td>1,109,000</td>
                        <td>1,329,000</td>
                        <td>1,245,000</td>
                        <td>1,576,000</td>
                    </tr>
                    <tr id="time-row">
                        <td rowSpan="6">Hàng hóa</td>
                        <td>Thời gian</td>
                        <td>2-3 ngày</td>
                        <td>2-3 ngày</td>
                        <td>3-4 ngày</td>
                        <td>3-4 ngày</td>
                        <td>4-5 ngày</td>
                        <td>2-3 ngày</td>
                        <td>3-4 ngày</td>
                        <td>4-5 ngày</td>
                        <td>3-5 ngày</td>
                        <td>4-7 ngày</td>
                        <td>5-8 ngày</td>
                    </tr>
                    <tr>
                        <td>0.5</td>
                        <td>295,000</td>
                        <td>295,000</td>
                        <td>554,000</td>
                        <td>635,000</td>
                        <td>642,000</td>
                        <td>648,000</td>
                        <td>720,000</td>
                        <td>789,000</td>
                        <td>865,000</td>
                        <td>870,000</td>
                        <td>1,055,000</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>388,000</td>
                        <td>388,000</td>
                        <td>645,000</td>
                        <td>737,000</td>
                        <td>753,000</td>
                        <td>798,000</td>
                        <td>884,000</td>
                        <td>961,000</td>
                        <td>1,031,000</td>
                        <td>1,045,000</td>
                        <td>1,272,000</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>564.000</td>
                        <td>564.000</td>
                        <td>735.000</td>
                        <td>837.000</td>
                        <td>860.000</td>
                        <td>937.000</td>
                        <td>1.038.000</td>
                        <td>1.127.000</td>
                        <td>1.195.000</td>
                        <td>1.215.000</td>
                        <td>1.487.000</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>612.000</td>
                        <td>612.000</td>
                        <td>826.000</td>
                        <td>937.000</td>
                        <td>967.000</td>
                        <td>1.075.000</td>
                        <td>1.192.000</td>
                        <td>1.294.000</td>
                        <td>1.358.000</td>
                        <td>1.385.000</td>
                        <td>1.703.000</td>
                    </tr>
                    <tr>
                        <td>2.5</td>
                        <td>745.000</td>
                        <td>745.000</td>
                        <td>916.000</td>
                        <td>1.037.000</td>
                        <td>1.074.000</td>
                        <td>1.214.000</td>
                        <td>1.346.000</td>
                        <td>1.460.000</td>
                        <td>1.521.000</td>
                        <td>1.556.000</td>
                        <td>1.918.00</td>
                    </tr>
                </table>
                <div id="note">Ghi chú:</div>
                    <div>
                        >> Bảng giá trên chưa bao gồm VAT, và phụ phí xăng dầu, phí phát vùng xâu, vùng xa, thuế nhập khẩu 
                        theo yêu cầu của Hải Quan nước đến (nếu có)
                    </div>
                    <div>
                        >> Thời gian toàn trình áp dụng cho hàng giao tại TP Hà Nội, và TP Hồ Chí Minh. Thời gian giao hàng không bao gồm ngày nhận, ngày nghỉ, thời gian thông quan chậm.
                         Trường hợp địa chỉ phát thuộc vùng xâu, vùng xa cộng thêm 2 – 3 ngày
                    </div>
                    <div>
                        >> Hàng hóa có là mỹ phẩm, thực phẩm, chất bột, chất lỏng, đồ điện tử (pin, máy tính xách tay, điện thoại, máy ảnh, bản mạch, thẻ nhớ, máy nghe nhạc,…) 
                        cần liên hệ với đường dây nóng 19008095 nhánh số 2 để được tư vấn về thủ tục, cách gói bọc. Những mặt hàng này có thu thêm phụ phí hàng đặc thù, chi phí tùy 
                        thuộc thời điểm gửi và nước đến.
                    </div>
                    <div>
                        >> Trọng lượng cồng kềnh quy đổi = Dài (cm) x Rộng (cm) x Cao (cm) / 500
                    </div>
            </div>
        </div>
    );
}

export default Content;