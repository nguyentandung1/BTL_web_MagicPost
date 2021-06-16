import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage/Homepage'
import VCN from './VCN/VCN'
import VTK from './VTK/VTK'
import VHT from './VHT/VHT'

function Routes() {
    useEffect(
        function (){
          document.title = "Bưu chính viễn thông Viettel - Trang chủ";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      );  

    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route path="/vcn" component={VCN} />
            <Route path="/vtk" component={VTK} />
            <Route path="/vht" component={VHT} />
        </BrowserRouter>
    );
}

export default Routes;