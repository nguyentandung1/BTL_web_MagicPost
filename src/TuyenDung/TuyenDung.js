import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function TuyenDung() {
    useEffect(
        function (){
          document.title = "Viettel Post TUYỂN DỤNG nhiều vị trí – THU NHẬP tới 20 TRIỆU/tháng";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "Viettel Post TUYỂN DỤNG nhiều vị trí – THU NHẬP tới 20 TRIỆU/tháng";
    var serviceTitle = "VIETTEL POST TUYỂN DỤNG NHIỀU VỊ TRÍ – THU NHẬP TỚI 20 TRIỆU/THÁNG";
    return (
        <div>
            <HeadBar />
            <HeadMenu />
            <ServiceTitle serviceTitle={serviceTitle} />
            <Content serviceName={serviceName}/>
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default TuyenDung;