import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function BoNhiemChuTich() {
    useEffect(
        function (){
          document.title = "CBTT bổ nhiệm Chủ tịch HĐQT nhiệm kỳ 2019 – 2024";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "CBTT bổ nhiệm Chủ tịch HĐQT nhiệm kỳ 2019 – 2024";
    var serviceTitle = "CBTT BỔ NHIỆM CHỦ TỊCH HĐQT NHIỆM KỲ 2019 – 2024";
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

export default BoNhiemChuTich;