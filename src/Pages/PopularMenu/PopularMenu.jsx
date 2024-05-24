
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../components/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === "popular");
    // console.log(menu);
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid grid-cols-2 gap-4">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;