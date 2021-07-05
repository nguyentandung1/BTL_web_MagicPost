import '../ActivityNews/Content.css'
import {Grid, Button, TextField} from '@material-ui/core'
import captcha from './images/captcha.png'

function Content({serviceName}) {
    var filedList = [
        {
            "fieldName": "Họ và tên",
            "placeholder": "Tên tổ chức/cá nhân phản ánh",
        },
        {
            "fieldName": "Số điện thoại",
            "placeholder": "Số điện thoại",
        },
        {
            "fieldName": "Địa chỉ",
            "placeholder": "Địa chỉ",
        },
        {
            "fieldName": "Loại khiếu nại",
            "placeholder": "Yêu cầu khác",
        },
        {
            "fieldName": "Mã phiếu gửi",
            "placeholder": "Nhập vận đơn",
        },
        {
            "fieldName": "Nội dung",
            "placeholder": "Nội dung",
        },
    ]
    return (
        <div id="content-container">
            <Grid container>
                <Grid item md={2} sm={false} xs={false}></Grid>
                <Grid id="complaint-form" item md={8} sm={12} xs={12}>
                    {
                        filedList.map(i => {
                            return  <Grid container id="complaint-field">
                                        <Grid item id="field-name" md={3} sm={12} xs={12}>{i.fieldName}</Grid>
                                        {
                                            i.fieldName === "Nội dung" 
                                            ? <Grid item md={8} sm={12} xs={12} id="input"><TextField variant="outlined" placeholder={i.placeholder} fullWidth /></Grid>
                                            : <Grid item md={8} sm={12} xs={12} id="input"><TextField variant="outlined" size="small" placeholder={i.placeholder} fullWidth /></Grid>
                                        }
                                    </Grid>
                        }) 
                    }
                    <div id="captcha-container">
                        <img id="captcha" src={captcha} alt="captcha" />
                        <TextField variant="outlined" size="small" placeholder="Nhập mã captcha" />
                        <div><Button variant="contained" color="secondary">Gửi</Button></div>
                    </div>
                </Grid>
                <Grid item md={2} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;