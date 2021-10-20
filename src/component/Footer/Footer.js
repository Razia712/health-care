import React from 'react';

const Footer = () => {
    return (
        <footer >

            <div class=" text-white p-3 d-flex justify-content-between bg-dark">
                <div className="align-items-center">
                    <h2 className="text-white"> About us</h2>
                    <ul>
                        <li>
                            <p>Medicare is one of the recognize hospital</p>
                        </li>
                        <li>
                            <p>Our objective is simple - connect patients</p>
                        </li>
                        <li>
                            <p>We have best doctor in our hospital</p>
                        </li>

                    </ul>
                </div>


                <div className="align-items-center">
                    <h2 className="text-white"> Bangladesh Office:</h2>
                    <ul>
                        <li>
                            <p>Mehnaz Mansur Tower 11/A, </p>
                        </li>
                        <li>
                            <p>Ground Floor Road No: 130,</p>
                        </li>
                        <li>
                            <p>Gulshan 1. Dhaka, 1212</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2>Contact us</h2>
                    <h4>
                        Phone:
                        +88017622546
                    </h4>
                    <h4>
                        Email:
                        info@alksdj.com
                    </h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;