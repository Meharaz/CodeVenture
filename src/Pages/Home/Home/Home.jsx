import React from 'react';
import TopSection from '../TopSection/TopSection';
import Features from '../Features/Features';
import Facilities from '../Facilities/Facilities';
import TopStudents from '../TopStudents/TopStudents';

const Home = () => {
    return (
        <div>
            <TopSection/>
            <Features/>
            <Facilities/>
            <TopStudents/>
        </div>
    );
};

export default Home;