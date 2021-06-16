import './VCN.css'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from './ServiceTitle' 
import Content from './Content'

function VCN() {
    var serviceName = "Chuyển phát Nhanh";
    var serviceTitle = "CHUYỂN PHÁT NHANH";
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

export default VCN;