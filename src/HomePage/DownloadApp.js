import './DownloadApp.css'
import {Grid, Button} from '@material-ui/core'
import Phone1 from './images/phone1.png'
import AppStore from './images/appstore.PNG'
import GooglePlay from './images/googleplay.PNG'

function DownloadApp() {
    return (
        <div>
            <Grid container id="downloadapp-container">
                <Grid item md={5} sm={12} xs={12}>
                    <img id="Phone1" src={Phone1} alt="Phone1" />
                </Grid>
                <Grid id="downloadapp-right" item md={7} sm={12} xs={12}>
                    <div id="downloadapp-title"><b>Tải ứng dụng ViettelPost</b></div>
                    <div id="downloadapp-content">Tạo đơn hàng, theo dõi hành trình, cập nhật thông tin mọi lúc mọi nơi và hơn thế nữa!</div>
                    <br />
                    <div>
                        <Button href="https://play.google.com/store/apps/details?id=com.viettel.ViettelPost&hl=vi&gl=US" target="_blank"><img src={GooglePlay} alt="GooglePlay" /></Button>
                        <Button href="https://apps.apple.com/us/app/viettelpost-chuy%E1%BB%83n-ph%C3%A1t-nhanh/id1398283517" target="_blank"><img src={AppStore} alt="AppStore" /></Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default DownloadApp;