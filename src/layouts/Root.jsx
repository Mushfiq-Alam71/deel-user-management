import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto font-poppins">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
            {/* max-w-7xl */}
            {/* max-w-screen-2xl */}
        </>
    );
};

export default Root;
