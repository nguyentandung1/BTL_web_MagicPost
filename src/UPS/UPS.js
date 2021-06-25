import './UPS.css'
import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function UPS() {
    useEffect(
        function (){
          document.title = "Chuyển phát nhanh quốc tế chỉ định hãng UPS";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "Chuyển phát quốc tế chỉ định hãng UPS";
    var serviceTitle = "CHUYỂN PHÁT QUỐC TẾ CHỈ ĐỊNH HÃNG UPS";
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

export default UPS;