import { FaBook, FaCalendar, FaHome, FaListUl, FaShoppingCart, FaStreetView, FaUser } from "react-icons/fa";
import { MdContactPhone, MdOutlineRestaurantMenu } from "react-icons/md";
import { SiFoodpanda } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiBookAdd } from "react-icons/bi";
import UseAdmin from "../../Hooks/UseAdmin";



const Deshboard = () => {
    const [cart] = useCart()

    const [isAdmin] = UseAdmin()
    return (
        <div className="flex">
            <div className="w-64 bg-orange-600 min-h-screen">
                {
                    isAdmin ? <>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/addItem"><IoFastFoodOutline />Add Item</NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/manageItem"><FaListUl />Manage Item</NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/manageBooking"><BiBookAdd />Manage Booking</NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/users"><FaUser />All Users</NavLink></li>
                        </ul>
                    </>
                        :
                        <>
                            <ul className="menu">
                                <li><NavLink to="/dashboard/UserHome"><FaHome />User Home</NavLink></li>
                            </ul>
                            <ul className="menu">
                                <li><NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink></li>
                            </ul>
                            <ul className="menu">
                                <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                            </ul>
                            <ul className="menu">
                                <li><NavLink to="/dashboard/review"><FaStreetView />Add Review</NavLink></li>
                            </ul>
                            <ul className="menu">
                                <li><NavLink to="/dashboard/booking"><FaBook />My Booking</NavLink></li>
                            </ul>
                        </>
                }
                <div className="divider"></div>

                <ul className="menu">
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink to="/menu"><MdOutlineRestaurantMenu /> Menu</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink to="/order/salad"><SiFoodpanda /> Order</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink to="/order/contact"><MdContactPhone /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;







{/* <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    Logo
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            General
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Teams </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Banned Users
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Billing
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Invoices
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Account </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Details
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Security
                                    </a>
                                </li>

                                <li>
                                    <form action="#">
                                        <button
                                            type="submit"
                                            className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div> */}