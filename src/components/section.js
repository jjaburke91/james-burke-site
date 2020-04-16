import React from "react";

import '../sass/section.scss';

const Section = (props) => (
    <div className="section">
        <h3 className="section__title text text--l">{props.title}</h3>
        <div className="section__content">
            {props.children}
        </div>
    </div>
);

export default Section;
