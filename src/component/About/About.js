import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../image/about.jpg';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-5">
                <div className="">
                    <img className="w-100 " src={aboutImg} alt="" />
                </div>

                <div className="mt-5 p-5">
                    <h1 className="mt-5 fw-bolder text-muted">ABOUT US</h1>
                    <p className="mt-4">Medicare is one the the best hospital  in Bangladesh<br />we provide best services to our pathience<br /> we have a lot of course.whice imporove a person to become a good learner</p>
                    <Link className="btn btn-info mt-3" to="/about" role="button">SEND THE MAIL</Link>
                </div>

            </div>
        </div>
    );
};

export default About;