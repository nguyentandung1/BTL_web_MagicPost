import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from '../VCN/ServiceTitle' 
import Content from './Content'

function BidNews() {
    useEffect(
        function (){
          document.title = "Tin đấu thầu";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    var serviceName = "Tin đấu thầu";
    var serviceTitle = "TIN ĐẤU THẦU";
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

export default BidNews;