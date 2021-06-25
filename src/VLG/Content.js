import './Content.css'
import Price1 from './images/price1.jpg'
import Price2 from './images/price2.jpg'
import Price3 from './images/price3.jpg'
import Price4 from './images/price4.jpg'


function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <img class="Price" src={Price1} alt="Price1" />
                <img class="Price" src={Price2} alt="Price2" />
                <img class="Price" src={Price3} alt="Price3" />
                <img class="Price" src={Price4} alt="Price4" />
            </div>
        </div>
    );
}

export default Content;