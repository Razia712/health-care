import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { courseName, img, Instructor, duration, price } = props.course;
    return (
        <div className="col">
            <div className="card h-100  shadow p-3 mb-5 bg-body rounded">
                <img src={img} class="card-img-top" alt="..." height="200px" />
                <div className="card-body">
                    <h5 className="card-title">{courseName}</h5>

                    <p>course instructor: {Instructor}</p>
                    <p>Lacture: {duration} Classes</p>
                    <p>price: $ {price} USD</p>
                    <Link className="btn btn-info" to="/" role="button">Enroll Now!</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;