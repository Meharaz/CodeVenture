import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Features = () => {

    return (
        <div className='flex items-center px-2 sm:px-4 justify-center md:mb-0 py-10 md:pt-8'>
            <div className='w-full max-w-5xl md:-mt-28 bg-gradient-to-r from-[#e3f5ff] to-[#ddf7ff] shadow-md p-2 py-3 pb-5 md:p-5 md:px-4 -bottom-20 rounded-xl'>
                <div className='grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4'>

                    <div className='p-1 sm:p-2 w-full flex items-center gap-x-2 border bg-[#edf2fd] border-[#f8d3fc] rounded-xl'>
                        <div className='w-16 sm:w-20'>
                            <img src="/student.png" alt="" />
                        </div>
                        <div>
                            <h3 className='text-secondary font-bold sm:text-3xl flex'>
                            <CountUp
                                    end={320}
                                    duration={3}
                                    separator=" "
                                    decimal=","
                                    suffix="+" />
                            </h3>
                            <p className='text-sm '>
                                A+ Students
                            </p>
                        </div>
                    </div>
                    <div className='p-1 sm:p-2 w-full flex items-center gap-x-2 border bg-[#f7edfd] border-[#f8d3fc] rounded-xl'>
                        <div className='w-16 sm:w-20'>
                            <img src="/teacher.png" alt="Teacher" />
                        </div>
                        <div>
                            <h3 className='text-secondary font-bold sm:text-3xl flex'>
                            <CountUp
                                    end={29}
                                    duration={3}
                                    separator=" "
                                    decimal=","
                                    suffix="+" />

                            </h3>
                            <p className='text-sm '>
                                Teacher
                            </p>
                        </div>
                    </div>
                    <div className='p-1 sm:p-2 w-full flex items-center gap-x-2 border bg-[#f7edfd] border-[#f8d3fc] rounded-xl'>
                        <div className='w-16 sm:w-20'>
                            <img src="/allStudents.png" alt="Teacher" />
                        </div>
                        <div>
                            <h3 className='text-secondary font-bold sm:text-3xl flex'>
                            <CountUp
                                    end={428}
                                    duration={3}
                                    separator=" "
                                    decimal=","
                                    suffix="+" />
                            </h3>
                            <p className='text-sm '>
                                Students
                            </p>
                        </div>
                    </div>
                    <div className='p-1 sm:p-2 w-full flex items-center gap-x-2 border bg-[#f7edfd] border-[#f8d3fc] rounded-xl'>
                        <div className='w-16 sm:w-20'>
                            <img src="/parent.png" alt="Teacher" />
                        </div>
                        <div>
                            <h3 className='text-secondary font-bold sm:text-3xl flex'>
                             
                                <CountUp
                                    end={580}
                                    duration={3}
                                    separator=" "
                                    decimal=","
                                    suffix="+" />
                            </h3>
                            <p className='text-sm '>
                                Parents
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='mt-2 sm:text-[22px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non rem commodi quibusdam qui voluptatem eaque, error tempora ipsum autem odit, nostrum, voluptatibus iusto in! Nam ducimus culpa dignissimos molestiae animi.
                    </p>
                    <div className='flex justify-end pt-2'>
                        <div className="btn btn-success rounded-3xl border border-sky-700 text-sky-700">
                            <Link to='/'>Register Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;