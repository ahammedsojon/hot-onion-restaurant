import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h2>Best food wiaiting for your belly</h2>
                <div className="input-group w-75 mx-auto mt-3">
                    <input type="text" className="search-filed form-control rounded-pill"
                        placeholder="Search food items" />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-danger rounded-pill">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;