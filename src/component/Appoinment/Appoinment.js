import React from 'react';
import { Link } from 'react-router-dom';
import appoinmentImg from '../../image/appoinment.jpg'
const Appoinment = () => {
    return (
        <div className="container">
            <div className="d-flex align-items-center row text-muted ">
                <div className="col">
                    <h1 className="mt-5"><span className="text-warning">Welcome , </span><br />WE BRING A E-LEARNING ISLAMIC PLATEFORM!</h1>
                    <p className="mt-4">sunnah Academy is the leading eLearning platform for Islamic Online Courses</p>
                    <Link class="btn btn-primary mt-4" to="/" role="button">MORE INFO</Link>
                </div>
                <div className="col">
                    <img src={appoinmentImg} alt="" className="w-100 m-5 img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Appoinment;