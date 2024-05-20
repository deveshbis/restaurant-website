import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const {user} =useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToFoodCart = ()=>{
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, 
                price,
                image
            }
            axiosSecure.post("/carts", cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
            
        }
        else{
            Swal.fire({
                title: "You are not Login",
                text: "Please login add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate("/login", {state:{from: location}})
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-black text-white p-2 mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToFoodCart} className="btn btn-outline border-0 border-b-4 mt-10">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;