import React from "react";
import '../mycss/VisitItem.css';

const VisitItem = ({id, clientName, address, visitDate, onRemove}) => {
    return(
        <div className="visit-item">
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id);
            }}>&times;</div>

            <div className='visit-text'>
                <span>{clientName}</span>&nbsp;&nbsp;&nbsp;<span>{address}</span>&nbsp;&nbsp;&nbsp;<span>{visitDate}</span>
            </div>
        </div>
    );
};

export default VisitItem;