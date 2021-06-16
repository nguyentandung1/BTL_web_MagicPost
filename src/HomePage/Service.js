import './Service.css'
import {Grid, Button} from "@material-ui/core"
import PaperPlane from './images/paper_plane.png'
import MoneyLend from './images/money_lend.png'
import Rocket from './images/rocket.png'

function Service() {
    return (
        <div>
            <center><h3>DỊCH VỤ NỔI BẬT</h3></center>
            <Grid container>
                <Grid item md={4} sm={6} xs={12}>
                    <div class="service-container" id="left-service">
                        <center><img class="service-icon" src={PaperPlane} alt="PaperPlane" /></center>
                        <div class="service-label">NHANH - AN TOÀN - CHÍNH XÁC</div>
                        <center class="service-method">Chuyển phát Nhanh</center>
                        <br />
                        <center class="service-method-short">VCN</center>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div class="service-container" id="center-service">
                        <center><img class="service-icon" src={MoneyLend} alt="MoneyLend" /></center>
                        <div class="service-label">AN TÂM - TIẾT KIỆM - KỊP THỜI</div>
                        <center class="service-method">Chuyển phát tiết kiệm</center>
                        <br />
                        <center class="service-method-short">VTK</center>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <div class="service-container" id="right-service">
                        <center><img class="service-icon" src={Rocket} alt="Rocket" /></center>
                        <div class="service-label">GIAO NGAY TRONG 24H</div>
                        <center class="service-method">Chuyển phát hỏa tốc</center>
                        <br />
                        <center class="service-method-short">VHT</center>
                    </div>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Button id="all-service-label">TẤT CẢ DỊCH VỤ</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Service;