import './VHT.css'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from './ServiceTitle' 
import Content from './Content'

function VHT() {
    return (
        <div>
            <HeadBar />
            <HeadMenu />
            <ServiceTitle />
            <Content />
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default VHT;