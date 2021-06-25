import './Content.css'

function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <br />
                <table id="content-table">
                    <tr>
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
                    </tr>
                    <tr>
                        <td rowspan="4">Tài liệu</td>
                        <td>0.5</td>
                        <td>707,300</td>
                        <td>840,500</td>
                        <td>783,600</td>
                        <td>783,600</td>
                        <td>783,600</td>
                        <td>840,500</td>
                        <td>936,600</td>
                        <td>955,600</td>
                        <td>1,050,800</td>
                        <td>1,242,600</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>816,200</td>
                        <td>1,031,400</td>
                        <td>947,200</td>
                        <td>1,001,900</td>
                        <td>1,001,900</td>
                        <td>1,031,400</td>
                        <td>1,182,200</td>
                        <td>1,228,100</td>
                        <td>1,432,700</td>
                        <td>1,761,200</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>925,200</td>
                        <td>1,222,400</td>
                        <td>1,110,800</td>
                        <td>1,220,100</td>
                        <td>1,220,100</td>
                        <td>1,222,400</td>
                        <td>1,427,800</td>
                        <td>1,500,600</td>
                        <td>1,814,500</td>
                        <td>2,279,700</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>1,034,100</td>
                        <td>1,413,300</td>
                        <td>1,274,400</td>
                        <td>1,438,400</td>
                        <td>1,438,400</td>
                        <td>1,413,300</td>
                        <td>1,673,400</td>
                        <td>1,773,100</td>
                        <td>2,196,400</td>
                        <td>2,798,300</td>
                    </tr>
                    <tr>
                        <td rowSpan="20">Hàng hóa</td>
                        <td>0.5</td>
                        <td>764,700</td>
                        <td>917,200</td>
                        <td>878,900</td>
                        <td>898,700</td>
                        <td>917,200</td>
                        <td>917,200</td>
                        <td>993,900</td>
                        <td>1,032,300</td>
                        <td>1,108,600</td>
                        <td>1,338,300</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>873,600</td>
                        <td>1,108,100</td>
                        <td>1,042,400</td>
                        <td>1,117,000</td>
                        <td>1,108,100</td>
                        <td>1,108,100</td>
                        <td>1,239,600</td>
                        <td>1,304,800</td>
                        <td>1,490,500</td>
                        <td>1,856,900</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>982,500</td>
                        <td>1,129,600</td>
                        <td>1,206,000</td>
                        <td>1,335,200</td>
                        <td>1,299,100</td>
                        <td>1,299,100</td>
                        <td>1,485,200</td>
                        <td>1,577,300</td>
                        <td>1,872,300</td>
                        <td>2,375,400</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>1,091,400</td>
                        <td>1,143,500</td>
                        <td>1,268,200</td>
                        <td>1,387,100</td>
                        <td>1,490,000</td>
                        <td>1,490,000</td>
                        <td>1,730,800</td>
                        <td>1,849,800</td>
                        <td>2,254,200</td>
                        <td>2,756,200</td>
                    </tr>
                    <tr>
                        <td>2.5</td>
                        <td>1,093,300</td>
                        <td>1,152,000</td>
                        <td>1,283,000</td>
                        <td>1,402,400</td>
                        <td>1,602,000</td>
                        <td>1,690,800</td>
                        <td>1,773,600</td>
                        <td>1,872,400</td>
                        <td>2,344,600</td>
                        <td>2,834,600</td>
                    </tr>
                    <tr>
                        <td>3.0</td>
                        <td>1,172,000</td>
                        <td>1,226,600</td>
                        <td>1,369,700</td>
                        <td>1,533,600</td>
                        <td>1,757,300</td>
                        <td>1,852,200</td>
                        <td>1,957,200</td>
                        <td>2,068,100</td>
                        <td>2,608,900</td>
                        <td>3,123,100</td>
                    </tr>
                    <tr>
                        <td>3.5</td>
                        <td>1,250,600</td>
                        <td>1,301,300</td>
                        <td>1,456,400</td>
                        <td>1,664,700</td>
                        <td>1,912,700</td>
                        <td>2,013,600</td>
                        <td>2,140,900</td>
                        <td>2,263,800</td>
                        <td>2,873,200</td>
                        <td>3,411,600</td>
                    </tr>
                    <tr>
                        <td>4.0</td>
                        <td>1,329,300</td>
                        <td>1,375,900</td>
                        <td>1,543,100</td>
                        <td>1,795,900</td>
                        <td>2,068,000</td>
                        <td>2,175,000</td>
                        <td>2,324,500</td>
                        <td>2,459,500</td>
                        <td>3,137,600</td>
                        <td>3,700,100</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Content;