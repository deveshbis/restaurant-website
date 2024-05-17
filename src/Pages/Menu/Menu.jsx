import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'



const Menu = () => {
    const [menu] = useMenu()
    // const popular = menu.filter(item=> item.category === "popular");
    const dessert = menu.filter(item=> item.category === "dessert");
    const pizza = menu.filter(item=> item.category === "pizza");
    const salad = menu.filter(item=> item.category === "salad");
    const offered = menu.filter(item=> item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Dev. | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
           
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            >
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="Dessert" coverImg={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;