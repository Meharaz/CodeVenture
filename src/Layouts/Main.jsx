
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='min-w-full max-w-full bg-green-100'>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Main;