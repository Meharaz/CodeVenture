import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaBlackTie, FaCamera, FaChalkboardTeacher, FaEnvelope, FaRegFilePdf } from "react-icons/fa";
import { RiProjector2Line } from "react-icons/ri";

const Facilities = () => {
    return (
        <div className='max-w-7xl mb-10 mx-auto px-2 md:px-8 lg:px-16 ox-hidden'>
            <div className='text-center font-all my-12'>
                <h1 className='text-2xl sm:text-4 mt-5 mb-1 md:text-5xl sm:mb-8 font-bold'>
                    All <span className='text-sky-400'>
                        facilities
                    </span>
                    <span> at once</span>
                </h1>
                <p className='font-bold text-sm sm:text-[18px]'>See all facilities from our Academy</p>
            </div>
            <Container fluid className='border grid p-3 sm:p-5 sm:gird border-[#e9ecef] bg-[#f8fafc] rounded-xl'>
                <Row>
                    <Col   className='border-b-2 border-r-2 grid justify-items-center text-center p-4' sm={4}>
                       <FaCamera className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>CCTV Control</h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                    <Col   className='border-b-2 border-r-2 grid justify-items-center text-center p-4' sm={4}>
                       <FaEnvelope className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>Absent SMS </h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                    <Col   className='border-b-2  grid justify-items-center text-center p-4' sm={4}>
                       <FaRegFilePdf className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>Online Result</h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                    <Col   className=' border-r-2 grid justify-items-center text-center p-4' sm={4}>
                       <RiProjector2Line className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>Projector Class</h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                    <Col   className=' border-r-2 grid justify-items-center text-center p-4' sm={4}>
                       <FaBlackTie className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>Expert Tutors</h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                    <Col   className='  grid justify-items-center text-center p-4' sm={4}>
                       <FaChalkboardTeacher className='text-sky-800 text-3xl' />
                       <h1 className='font-bold text-2xl'>Standard Examination </h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero, impedit praesentium labore illum et veniam iure a eum molestias!</p>
                    </Col>          
                </Row>
            </Container>

        </div>
    );
};

export default Facilities;