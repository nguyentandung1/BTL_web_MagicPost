import React, { useEffect } from 'react'
import HeadBar from './HeadBar'
import HeadMenu from './HeadMenu'
import Banner from './Banner'
import Content1 from './Content1'
import Service from './Service'
import Introduction from './Introduction'
import DownloadApp from './DownloadApp'
import FooterBackground from './images/footer-background.jpg'
import Footer from './Footer'
import './Homepage.css'

function HomePage() {
    useEffect(
        function (){
          document.title = "MagicPost - Trang chủ";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    return (
        <div>
            <HeadBar />
            <HeadMenu />
            <Banner />
            <Content1 />
            <Service />
            <Introduction />
            <DownloadApp />
            <img src={FooterBackground} alt="footer-background" />
            <Footer />
        </div>
    );
}

export default HomePage;