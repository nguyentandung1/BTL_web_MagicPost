import './DHL.css'
import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function DHL() {
    useEffect(
        function (){
          document.title = "Chuyển phát nhanh chỉ định hãng DHL";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "Chuyển phát quốc tế chỉ định hãng DHL";
    var serviceTitle = "CHUYỂN PHÁT QUỐC TẾ CHỈ ĐỊNH HÃNG DHL";
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

export default DHL;