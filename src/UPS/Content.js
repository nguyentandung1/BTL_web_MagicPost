import './Content.css'

function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <br />
                <table id="content-table">
                    <tr>
                        <th rowSpan="2">Trọng lượng</th>
                        <th colSpan="10">Vùng</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <td>0.5</td>
                        <td>636,570</td>
                        <td>706,083</td>
                        <td>732,317</td>
                        <td>779,275</td>
                        <td>842,940</td>
                        <td>860,040</td>
                        <td>1,001,677</td>
                        <td>1,122,270</td>
                        <td>1,154,733</td>
                        <td>756,450</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>713,857</td>
                        <td>785,015</td>
                        <td>867,985</td>
                        <td>904,131</td>
                        <td>1,027,762</td>
                        <td>1,047,804</td>
                        <td>1,250,048</td>
                        <td>1,369,112</td>
                        <td>1,400,164</td>
                        <td>873,107</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>786,930</td>
                        <td>863,947</td>
                        <td>1,003,653</td>
                        <td>1,037,598</td>
                        <td>1,216,331</td>
                        <td>1,238,195</td>
                        <td>1,499,785</td>
                        <td>1,610,214</td>
                        <td>1,644,253</td>
                        <td>949,663</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>862,812</td>
                        <td>940,009</td>
                        <td>1,139,321</td>
                        <td>1,155,278</td>
                        <td>1,403,651</td>
                        <td>1,425,959</td>
                        <td>1,746,793</td>
                        <td>1,852,750</td>
                        <td>1,889,685</td>
                        <td>1,028,043</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Content;