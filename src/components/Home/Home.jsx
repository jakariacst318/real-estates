import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import Footer from "../Footer/Footer";
import LeftSite from "../LeftSite/LeftSite";
import Navbar from "../Navbar/Navbar";

const Home = () => {

    const estates = useLoaderData()
    console.log(estates)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <LeftSite></LeftSite>
                </div>
                <div className="md:col-span-2 grid lg:grid-cols-2 gap-5 items-center">
                    {
                        estates.map(estate => <Estates key={estate.id}
                        estates ={estate}></Estates>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;