import '../ActivityNews/Content.css'
import {Grid, FormControl, NativeSelect, InputAdornment, FilledInput, IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

function JobSearchBar() {
    const [job, setJob] = useState("")
    const [workplace, setWorkPlace] = useState("")

    const changeWorkPlace = (event) => {
        setWorkPlace(event.target.value);
    }
    const changeJob = (event) => {
        setJob(event.target.value);
    }
    return (
        <div id="jobsearchbar-container">
            <Grid container>
                <Grid item id="jobsearchbar-section" md={4} sm={4} xs={12}>
                    <FormControl fullWidth>
                        <NativeSelect
                            value={workplace}
                            onChange={e => changeWorkPlace(e)}
                            variant="outlined"
                            >
                            <option value="">Địa điểm làm việc</option>
                            <option value={10}>Đà Nẵng</option>
                            <option value={20}>Hà Nội</option>
                            <option value={30}>Hồ Chí Minh</option>
                            <option value={40}>Nha Trang</option>
                            <option value={50}>Phú Quốc</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item id="jobsearchbar-section" md={4} sm={4} xs={12}>
                    <FormControl variant="filled" fullWidth>
                        <NativeSelect
                            value={job}
                            onChange={e => changeJob(e)}
                            >
                            <option value="">Lựa chọn công việc</option>
                            <option value={10}>Nhân viên chăm sóc khách hàng</option>
                            <option value={20}>Nhân viên Công nghệ</option>
                            <option value={30}>Nhân viên giao bưu phẩm</option>
                            <option value={40}>Nhân viên giao hàng</option>
                            <option value={50}>Nhân viên kinh doanh</option>
                            <option value={60}>Nhân viên Marketing</option>
                            <option value={70}>Nhân viên phân loại bưu phẩm</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item id="jobsearchbar-section" md={4} sm={4} xs={12}>
                    <FormControl fullWidth>
                        <FilledInput
                            placeholder="Tìm kiếm"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}

export default JobSearchBar;
