import './infopopup.css';

function InfoPopup({message}) {
    return (
        <div className="info-popup">
            <p>{message}</p>
        </div>
    );
}

export default InfoPopup;