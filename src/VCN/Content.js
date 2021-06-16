import './Content.css'
import ServiceFee from './images/service-fee.png'

function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <img id="service-fee" src={ServiceFee} alt="ServiceFee" />
            </div>
        </div>
    );
}

export default Content;