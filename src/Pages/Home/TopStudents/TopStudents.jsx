import React from 'react';
import Marquee from 'react-fast-marquee';

const TopStudents = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-center'>Our <span className='text-sky-400'>Top Students</span> from past courses</p>
            <Marquee speed={50} gradient gradientWidth={50} gradientColor={[101, 221, 239]} className='rounded'>
                <div className="card w-96 bg-base-100 shadow-xl ps-2">
                    <figure><img src="https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Alex
                            <div className="badge badge-secondary">A+ Grade</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Web Design & Development</div>
                            <div className="badge badge-outline">Basic Graphics Design</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ps-2">
                    <figure><img src="https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Alex
                            <div className="badge badge-secondary">A+ Grade</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Web Design & Development</div>
                            <div className="badge badge-outline">Basic Graphics Design</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ps-2">
                    <figure><img src="https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Alex
                            <div className="badge badge-secondary">A+ Grade</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Web Design & Development</div>
                            <div className="badge badge-outline">Basic Graphics Design</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ps-2">
                    <figure><img src="https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Alex
                            <div className="badge badge-secondary">A+ Grade</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Web Design & Development</div>
                            <div className="badge badge-outline">Basic Graphics Design</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ps-2">
                    <figure><img src="https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Alex
                            <div className="badge badge-secondary">A+ Grade</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Web Design & Development</div>
                            <div className="badge badge-outline">Basic Graphics Design</div>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default TopStudents;