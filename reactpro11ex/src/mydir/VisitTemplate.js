import React from "react";
import '../mycss/VisitTemplate.css';

const VisitTemplate = ({form, children}) => {
    return(
        <main className="visit-list-templates">
            <div className="title">
                거래처 정보 입력
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section>
                {children}
            </section>
        </main>
    );
};

export default VisitTemplate;