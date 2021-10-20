import React from 'react';
import Treatment from '../../Treatment/Treatment';

import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';


import Specialist from '../Specialist/Specialist';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Treatment></Treatment>
            <Specialist></Specialist>
            <Appoinment></Appoinment>

        </div>
    );
};

export default Home;