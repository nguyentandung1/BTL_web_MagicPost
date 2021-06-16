import './Content1.css'
import {useState} from 'react';
import {Grid, Button, InputAdornment, TextField} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import searchPackage from './images/search-package.png'
import StorefrontIcon from '@material-ui/icons/Storefront';
import searchPost from './images/search-post.png'


function Content1() {
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [province2, setProvince2] = useState("")
    const [district2, setDistrict2] = useState("")

    const handleChange = (event) => {
        setProvince(event.target.value);
      };

    const handleChange2 = (event) => {
        setDistrict(event.target.value);
    };

    const handleChange3 = (event) => {
        setProvince2(event.target.value);
      };

    const handleChange4 = (event) => {
        setDistrict2(event.target.value);
    };

    return (
        <div id="content1-container">
            <Grid container>
                <Grid item md={4}>
                    <div id="search-package">
                        <FindInPageIcon color="secondary"/><b> Theo dõi vận đơn</b>
                        <center><img id="searchPackage" src={searchPackage} alt="searchPackage" /></center>
                        <Button variant="contained" color="secondary" fullWidth>Tra cứu</Button>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div id="fee-calculate">
                        <LocalShippingIcon color="secondary" /><b> Ước tính cước phí</b>
                        <FormControl id="select-start-location">
                            <InputLabel shrink>Gửi từ</InputLabel>
                            <Select
                                fullWidth
                                id="select-start-province"
                                value={province}
                                onChange={handleChange}
                                displayEmpty
                                >
                                <MenuItem value="" disabled><em>Chọn Tỉnh/TP</em></MenuItem>
                                <MenuItem value="TP.Hà Nội">TP.Hà Nội</MenuItem>
                                <MenuItem value="TP.HCM">TP.HCM</MenuItem>
                                <MenuItem value="TP.Đà Nẵng">TP.Đà Nẵng</MenuItem>
                                <MenuItem value="TP.Hải Phòng">TP.Hải Phòng</MenuItem>
                                <MenuItem value="TP.Tiền Giang">TP.Tiền Giang</MenuItem>
                                <MenuItem value="TP.Cần Thơ">TP.Cần Thơ</MenuItem>
                                <MenuItem value="TP.Hậu Giang">TP.Hậu Giang</MenuItem>
                                <MenuItem value="T.Vĩnh Phúc">T.Vĩnh Phúc</MenuItem>
                                <MenuItem value="T.Hải Dương">T.Hải Dương</MenuItem>
                                <MenuItem value="T.Hà Nam">T.Hà Nam</MenuItem>
                            </Select>
                            <br />
                            <Select
                                fullWidth
                                id="select-start-district"
                                value={district}
                                onChange={handleChange2}
                                displayEmpty
                                >
                                <MenuItem value="" disabled><em>Chọn Quận/Huyện</em></MenuItem>
                                <MenuItem value="Q.Ba Đình">Q.Ba Đình</MenuItem>
                                <MenuItem value="Q.Tây Hồ">Q.Tây Hồ</MenuItem>
                                <MenuItem value="Q.Cầu Giấy">Q.Cầu Giấy</MenuItem>
                                <MenuItem value="Q.Hai Bà Trưng">Q.Hai Bà Trưng</MenuItem>
                                <MenuItem value="Q.Đống Đa">Q.Đống Đa</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl id="select-destination-location">
                            <InputLabel shrink>Gửi đến</InputLabel>
                            <Select
                                fullWidth
                                id="select-start-province"
                                value={province2}
                                onChange={handleChange3}
                                displayEmpty
                                >
                                <MenuItem value="" disabled><em>Chọn Tỉnh/TP</em></MenuItem>
                                <MenuItem value="TP.Hà Nội">TP.Hà Nội</MenuItem>
                                <MenuItem value="TP.HCM">TP.HCM</MenuItem>
                                <MenuItem value="TP.Đà Nẵng">TP.Đà Nẵng</MenuItem>
                                <MenuItem value="TP.Hải Phòng">TP.Hải Phòng</MenuItem>
                                <MenuItem value="TP.Tiền Giang">TP.Tiền Giang</MenuItem>
                                <MenuItem value="TP.Cần Thơ">TP.Cần Thơ</MenuItem>
                                <MenuItem value="TP.Hậu Giang">TP.Hậu Giang</MenuItem>
                                <MenuItem value="T.Vĩnh Phúc">T.Vĩnh Phúc</MenuItem>
                                <MenuItem value="T.Hải Dương">T.Hải Dương</MenuItem>
                                <MenuItem value="T.Hà Nam">T.Hà Nam</MenuItem>
                            </Select>
                            <br />
                            <Select
                                fullWidth
                                id="select-start-district"
                                value={district2}
                                onChange={handleChange4}
                                displayEmpty
                                >
                                <MenuItem value="" disabled><em>Chọn Quận/Huyện</em></MenuItem>
                                <MenuItem value="Q.Ba Đình">Q.Ba Đình</MenuItem>
                                <MenuItem value="Q.Tây Hồ">Q.Tây Hồ</MenuItem>
                                <MenuItem value="Q.Cầu Giấy">Q.Cầu Giấy</MenuItem>
                                <MenuItem value="Q.Hai Bà Trưng">Q.Hai Bà Trưng</MenuItem>
                                <MenuItem value="Q.Đống Đa">Q.Đống Đa</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Trọng lượng"
                            id="filled-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">gram</InputAdornment>,
                            }}
                            variant="filled"
                        />
                        <br />
                        <Button variant="contained" color="secondary" fullWidth>Tra cứu</Button>
                    </div>
                </Grid>
                <Grid item md={4}>
                <div id="search-post">
                        <StorefrontIcon color="secondary"/><b> Tìm kiếm bưu cục</b>
                        <center><img id="searchPackage" src={searchPost} alt="searchPost" /></center>
                        <Button variant="contained" color="secondary" fullWidth>Tìm kiếm</Button>
                </div>
                </Grid>        
            </Grid>
        </div>
    );
}

export default Content1;