import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage/Homepage'
import VCN from './VCN/VCN'
import VTK from './VTK/VTK'
import VHT from './VHT/VHT'
import DHL from './DHL/DHL'
import UPS from './UPS/UPS'
import VQN from './VQN/VQN'
import VLQ from './VLQ/VLQ'
import VLF from './VLF/VLF'
import VLG from './VLG/VLG'
import ActivityNews from './ActivityNews/ActivityNews'
import TuyenDung from './TuyenDung/TuyenDung'
import SaleNews from './SaleNews/SaleNews'
import KhuyenMai from './KhuyenMai/KhuyenMai'
import BidNews from './BidNews/BidNews'
import ChoHangQuy3 from './ChoHangQuy3/ChoHangQuy3'
import ShareHolders from './ShareHolders/ShareHolders'
import BoNhiemChuTich from './BoNhiemChuTich/BoNhiemChuTich'
import CompanyRule from './CompanyRule/CompanyRule'
import CompanyRule2019 from './CompanyRule2019/CompanyRule2019'
import HirePage from './HirePage/HirePage'
import Complaint from './Complaint/Complaint'

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route path="/vcn" component={VCN} />
            <Route path="/vtk" component={VTK} />
            <Route path="/vht" component={VHT} />
            <Route path="/dhl" component={DHL} />
            <Route path="/ups" component={UPS} />
            <Route path="/vqn" component={VQN} />
            <Route path="/vlq" component={VLQ} />
            <Route path="/vlf" component={VLF} />
            <Route path="/vlg" component={VLG} />
            <Route path="/activitynews" component={ActivityNews} />
            <Route path='/tuyendung' component={TuyenDung} />
            <Route path="/salenews" component={SaleNews} />
            <Route path='/khuyenmai' component={KhuyenMai} />
            <Route path="/bidnews" component={BidNews} />
            <Route path="/chohangquy3" component={ChoHangQuy3} />
            <Route path="/shareholders" component={ShareHolders} />
            <Route path="/bonhiemchutich" component={BoNhiemChuTich} />
            <Route path="/companyrule" component={CompanyRule} />
            <Route path="/companyrule2019" component={CompanyRule2019} />
            <Route path="/hirepage" component={HirePage} />
            <Route path="/complaint" component={Complaint} />
        </BrowserRouter>
    );
}

export default Routes;