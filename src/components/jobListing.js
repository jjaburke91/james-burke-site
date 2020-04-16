import React from "react";

import '../sass/jobListing.scss';

const formatDate = date => {
    return date;
}

const JobListing = (props) => {
    return (
        <div className="job-listing">
            <div className="job-listing__role">
                <span>{props.company}</span>, <span>{props.title}</span>
            </div>
            <div className="job-listing__dates">
                <span>{props.dateStart} - {props.dateEnd}</span>
            </div>
        </div>
    );
}

export default JobListing;
