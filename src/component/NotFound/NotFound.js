import React from 'react';
import errorimg from '../../image/Error.jpg';

const NotFound = () => {
    return (

        <div className="text-center mb-5">
            <h2>The page is not found</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={errorimg} alt="" width="50%" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;