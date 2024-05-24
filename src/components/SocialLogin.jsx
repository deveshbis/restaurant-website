import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import {  useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    // const location = useLocation();

    // const from = location?.state || '/';

    // const handleSocialLogin = socialProvider => {
    //     socialProvider()
    //         .then(result => {
    //             if (result.user) {
    //                 navigate(from);
    //             }
    //         })
    // }
    const handleSocialLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post("/users", userInfo)
                .then(res =>{
                    console.log(res);
                    navigate('/')
                })

            })
    }
    return (
        <div className="p-5">
            <div className="flex items-center pb-3 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>

            <div className=" flex flex-col items-center space-y-2">
                <button onClick={ handleSocialLogin} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;