import './ServiceTitle.css'

function ServiceTitle({serviceTitle}) {
    return (
        <div id="service-title-container">
            <b>{serviceTitle}</b>
        </div>
    );
}

export default ServiceTitle;