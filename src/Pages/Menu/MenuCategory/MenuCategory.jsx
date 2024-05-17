import Cover from "../../../components/Cover";
import MenuItem from "../../../components/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
             {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-4 my-16">
                
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;