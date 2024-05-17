import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import "./featured.css"

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
        <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="flex justify-center items-center pb-20 mt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum nemo eius, id fugit eligendi quibusdam distinctio est sed natus voluptas asperiores, harum, nulla optio quos similique veritatis aspernatur quam?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-10">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;