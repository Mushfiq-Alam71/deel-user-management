import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const [theme, setTheme] = useState('light');
    const [menu, setMenu] = useState(false);

    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }

    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink = <div className="flex flex-col lg:flex-row gap-4 z-10 list-none h-full w-full nav">
        <li className="w-full"><NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-lg btn btn-outline whitespace-nowrap text-white bg-black' : 'btn btn-outline text-lg whitespace-nowrap'
        }>Home</NavLink></li>

        <li className="w-full"><NavLink to='/dashboard' className={({ isActive }) =>
            isActive ? 'text-lg btn btn-outline whitespace-nowrap text-white bg-black' : 'btn btn-outline text-lg whitespace-nowrap'
        }>Dashboard</NavLink></li>

        <li className="w-full"><NavLink to='/contactus' className={({ isActive }) =>
            isActive ? 'text-lg btn btn-outline whitespace-nowrap text-white bg-black' : 'btn btn-outline text-lg whitespace-nowrap'
        }>Contact Us</NavLink></li>
    </div>


    return (
        <div className="block md:flex lg:flex items-center justify-between p-4 shadow-lg rounded-xl relative z-50 top-0 left-0 w-full bg-white">
            {
                menu && <div className="block lg:hidden absolute top-16 left-0 h-screen w-2/5 bg-gray-100 z-10">
                    {navLink}
                </div>
            }
            {/* Hamburger menu */}
            <div className="block lg:hidden">
                <label className="btn btn-circle swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={() => setMenu(prev => !prev)} />

                    {/* hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
            </div>

            {/* logo / title */}
            <div className="flex flex-row">
                <img src="/images/icon.png" alt="" />
                <a className="flex items-center text-4xl bg-gradient-to-r from-[#343ccf] to-[#5c79ed] bg-clip-text text-transparent font-bold">deel.</a>
            </div>
            <div className="hidden lg:flex">{navLink}</div>
            <div>
                {user ? (
                    <div className="flex items-center">
                        <label className="swap swap-rotate mr-4 mt-1">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onChange={handleToggle} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                        <Tooltip anchorSelect=".toggleTheme" place="bottom">
                            {user.displayName}
                        </Tooltip>
                        <Link to='/userprofile' tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2 pt-1 pl-1  toggleTheme" >
                            <div className="w-11 rounded-full">
                                <img alt="user photo" className="" src={user.photoURL} />
                            </div>
                        </Link>
                        <button onClick={handleSignOut} className="btn hover:bg-red-500 hover:text-white  rounded-full text-lg">Sign Out</button>
                    </div>
                ) : (
                    <div className="hidden lg:flex">
                        <Link to='/login' className="btn btn-outline rounded-full text-lg">Login</Link>
                        <Link to='/register' className="btn btn-outline rounded-full text-lg ml-2">Register</Link>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Navbar;
