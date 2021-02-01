import React, { Component, useState } from "react";
import "./style.css"

function DasboardPayslipCard({
    name,
    description,
    buttonLink,
    buttonText
}) {

    const [state] = useState()

    return (
        <div className="dashboardCard card cardBackground">
            <div className="card-body">
                <h4 className="card-subtitle">{name}</h4>
                <p className="card-text">{description}</p>
                <a href={buttonLink} className="card-link bottomLink">{buttonText}</a>
            </div>
        </div>
    );

}



export default DasboardPayslipCard;
