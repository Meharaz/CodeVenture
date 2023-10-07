
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/notice'>Notice</Link></li>
    </>

    return (
        <div className="navbar bg-black bg-opacity-30 w-full text-white fixed ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='flex items-center p-2'>
                    <Link to='/'>
                        <img src="/logo.png" alt="" className='h-10 w-12' />
                    </Link>
                    <div className='ms-2'>
                        <h1><span className='text-sky-400'>CodeVenture</span> Academy</h1>
                    </div>
                </div>
            </div>
            <div  className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1 ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='btn btn-info btn-outline '>
                <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;