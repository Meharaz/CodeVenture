import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="flex flex-wrap justify-center">
            {courses.map(course => (
                <div className="card w-96 bg-base-100 shadow-xl m-4" key={course.name}>
                    <figure className="px-10 pt-10">
                        <img src={`/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg`} alt={course.name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{course.name}</h2>
                        <p>{course.description}</p>
                        <p>Duration: {course.duration}</p>
                        <p>Price: {course.price_bdt} BDT</p>
                        <div className="card-action ">
                            <button className="btn btn-primary w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;