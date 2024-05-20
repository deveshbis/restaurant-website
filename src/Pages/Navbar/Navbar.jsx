import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart()
    const navLink = <>

        <li><NavLink to='/' activeClassName="text-green-500">Home</NavLink></li>
        <li><NavLink to='/contactUs'>CONTACT us</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li><NavLink to='/dashboard/cart'>
            <FaShoppingCart/>
            <div className="badge">+{cart.length}</div>
        </NavLink></li>

    </>
    return (
        <div className="navbar fixed z-10 text-white bg-opacity-30 max-w-screen-xl mx-auto bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dev Retaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-4">
                {user ? (
                    <div className="flex items-center space-x-4 relative">
                        <button onClick={logoutUser} className="btn btn-sm btn-ghost hover:bg-black font-semibold text-[16px]">Logout</button>
                    </div>
                ) : (
                    <Link to='/login'><button className="text-white bg-black p-2 rounded-xl font-semibold text-[16px]">Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;