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
        </BrowserRouter>
    );
}

export default Routes;