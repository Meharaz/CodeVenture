import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const TopStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/student.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Filter top students with score 'A+'
    const topStudents = students.filter(student => student.score === 'A+');
    const topFemaleStudents = topStudents.filter(student => student.gender === 'Female');
    const topMaleStudents = topStudents.filter(student => student.gender === 'Male');

    return (
        <div className="top-students">
            <p className="text-4xl font-bold text-center">
                Our <span className="text-sky-400">Top Students</span> with A+ scores
            </p>
            <div className="flex justify-center mt-10">
                <Marquee direction='right' speed={40} gradient gradientWidth={50} gradientColor={[101, 221, 239]} className="rounded">
                    {topFemaleStudents.map(student => (
                        <div className="card w-96 bg-base-100 m-2 h-48" key={student.name}>
                            <figure>
                                <img src={`/images/${student.image}`} alt={student.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {student.name}
                                </h2>
                                <p>Course: {student.course}</p>
                                <p className='badge badge-secondary'>Score: {student.score}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="flex justify-center mt-10">
                <Marquee speed={40} gradient gradientWidth={50} gradientColor={[101, 221, 239]} className="rounded">
                    {topMaleStudents.map(student => (
                        <div className="card w-96 bg-base-100  m-2 h-48" key={student.name}>
                            <figure>
                                <img src={`/images/${student.image}`} alt={student.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {student.name}
                                </h2>
                                <p>Course: {student.course}</p>
                                <p className='badge badge-secondary'>Score: {student.score}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopStudents;
