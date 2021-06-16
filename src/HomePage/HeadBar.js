import './HeadBar.css'
import {Grid, Button, Select, MenuItem} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import {useState} from "react";

function HeadBar() {
    const [language, setLanguage] = useState('Tiếng Việt');

    const changeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    return (
        <div id="head-bar">
            <Grid container>
                <Grid item md={2} sm={false} xs={false}></Grid>
                <Grid item md={6} sm={7} xs={12}>
                    <pre id="hotline">Hotline: <b>1900 8095</b>     8:00 - 20:00, Thứ 2 - Chủ Nhật</pre>
                </Grid>
                <Grid item md={3} sm={4} xs={5}>
                    <Button
                        id="login-button"
                        variant="contained"
                        color="secondary"
                        startIcon={<PersonIcon />}
                        size="small"
                    >
                    Đăng nhập/Đăng ký
                    </Button>
                </Grid>
                <Grid item md={1} sm={1} xs={3}>
                    <Select id="language" value={language} onChange={changeLanguage}>
                        <MenuItem value="Tiếng Việt">Tiếng Việt</MenuItem>
                        <MenuItem value="English">English</MenuItem>
                    </Select>                
                </Grid>
            </Grid>
        </div>
    );
}

export default HeadBar;