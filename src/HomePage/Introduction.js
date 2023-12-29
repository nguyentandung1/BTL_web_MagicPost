import './Introduction.css'
import {Grid} from "@material-ui/core"
import {Dropdown} from 'react-bootstrap'
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from '@material-ui/icons/ListAlt';
import viettelPost1 from './images/viettel_post_1.png'

function Introduction() {
    return (
        <div>
            <Grid id="introduction-container" container>
                <Grid item md={6}>
                    <div id="introduction-content">
                        <b id="introduction-header">Mạng lưới bưu cục trên 63 tỉnh thành</b>
                        <Dropdown.Divider />
                        <div id="introduction-body">
                            <b>Mạng lưới chuyển phát của Magic Post</b> phủ sóng khắp
                            63 tỉnh thành trên lãnh thổ Việt Nam
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div id="introduction-number-container">
                        <div class="introduction-number">
                            <GroupIcon style={{color: "red", fontSize: 80}} />
                            <div class="record-information">
                                <b>328.633</b>
                                <p>KHÁCH HÀNG TIN DÙNG</p>
                            </div>
                        </div>
                        <div class="introduction-number">
                            <ListAltIcon style={{color: "red", fontSize: 80}} />
                            <div class="record-information">
                                <b>521.319</b>
                                <p>ĐƠN HÀNG ĐANG VẬN CHUYỂN</p>
                            </div>
                        </div>
                    </div>
                    <img width="640" src={viettelPost1} alt="viettelPost1" />
                </Grid>    
            </Grid>
        </div>
    );
}

export default Introduction;