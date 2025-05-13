import React from "react";
import VisitItem from "./VisitItem";

const VisitItemList = ({visits, onRemove, allRemove}) => {
    const visitList = visits.map((visit) => (
        <VisitItem
            {...visit}
            onRemove={onRemove}
            key={visit.id}
        />
    ));
    return(
        <div>
            {visitList}
            <button onClick={allRemove}>전체 삭제</button>
        </div>
    );
};

export default VisitItemList;