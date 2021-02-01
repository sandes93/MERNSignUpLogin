import React from 'react';
import './style.css';

function DashboardNewsCard() {
    return (
        <div className="dashboardCard card cardBackground">
            <div className="card-body">
                <h4 className="card-subtitle">card</h4>
                <p className="card-text">description</p>
                <a href="/" className="card-link bottomLink">
                    More details
                </a>
            </div>
        </div>
    );
}

export default DashboardNewsCard;
