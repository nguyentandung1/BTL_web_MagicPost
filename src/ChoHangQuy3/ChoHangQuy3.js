import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function ChoHangQuy3() {
    useEffect(
        function (){
          document.title = "Cung cấp túi chở hàng Quý III năm 2020";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "Cung cấp túi chở hàng Quý III năm 2020";
    var serviceTitle = "CUNG CẤP TÚI CHỞ HÀNG QUÝ III NĂM 2020";
    return (
        <div>
            <HeadBar />
            <HeadMenu />
            <ServiceTitle serviceTitle={serviceTitle} />
            <Content serviceName={serviceName} />
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default ChoHangQuy3;