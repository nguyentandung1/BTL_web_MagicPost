import './Content.css'

function Content({serviceName}) {
    return (
        <div id="content-container">
            <div id="content">
                <p id="service-name">{serviceName}</p>
                <br />
            </div>
        </div>
    );
}

export default Content;