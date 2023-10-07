
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='min-w-full max-w-full'>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Main;