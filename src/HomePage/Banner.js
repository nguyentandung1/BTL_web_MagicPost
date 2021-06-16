import './Banner.css'
import {IconButton} from '@material-ui/core'
import banner1 from './images/banner-1.jpg'
import banner2 from './images/banner-2.jpg'
import banner3 from './images/banner-3.jpg'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fade from '@material-ui/core/Fade';
import {useState} from "react";

function Banner() {
    const [checked, setChecked] = useState(true);
    const [banner, setBanner] = useState(banner1)
    const Fading = (direction) => {
        setChecked(false);
        setTimeout(function () {
            changeBanner(direction);
        }, 200);
    }
    const changeBanner = (direction) => {
        if (direction === "left") {
            if (banner === banner1) {
                setBanner(banner3);
            }
            else if (banner === banner2) {
                setBanner(banner1);
            }
            else {
                setBanner(banner2);
            }
        }
        else if (direction === "right") {
            if (banner === banner1) {
                setBanner(banner2);
            }
            else if (banner === banner2) {
                setBanner(banner3);
            }
            else {
                setBanner(banner1);
            }
        }
        setTimeout(function () {
            setChecked(true);
        }, 200);
    }

    return (
        <div id="banner">
            <Fade in={checked}><img id="banner-image" src={banner} alt="banner" /></Fade>
            <IconButton onClick={() => Fading("left")} size="medium" class="left-icon">
                <ArrowBackIosIcon/>
            </IconButton> 
            <IconButton onClick={() => Fading("right")} size="medium" class="right-icon">
                <ArrowForwardIosIcon/>
            </IconButton>                       
        </div>
    );
}

export default Banner;