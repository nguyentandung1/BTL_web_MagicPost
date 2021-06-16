import './Content.css'
import ServiceFee from './images/service-fee.png'

function Content() {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">Chuyển phát Hỏa tốc</p>
                <img id="service-fee" src={ServiceFee} alt="ServiceFee" />
            </div>
        </div>
    );
}

export default Content;