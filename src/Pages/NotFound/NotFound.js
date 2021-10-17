import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <div>
                    <img height="450px" className="mw-100" src="https://image.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1939.jpg" alt="" />
                </div>
                <div className="text-center mb-3">
                    <Link to="/">
                        <button className="btn btn-danger">Go home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;