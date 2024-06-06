import { useLoaderData, useParams } from "react-router-dom";
import { FaRegSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Banner from "../components/Banner/Banner";

const Details = () => {
    const details = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const detail = details.find(book => book.id === idInt)
    const { image, estate_title, segment_name, description, price, status, area, location, view_property, facilities } = detail;
    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-3  gap-5 ">
                <div className="md:col-span-2 ">
                    <img src={image} alt="" />
                    <p className="text-slate-600 py-5 text-lg">{description}</p>
                </div>
                <div className="space-y-3">
                    <p className="text-3xl font-medium">{estate_title}</p>
                    <p className="text-lg font-semibold">Segment: <span className="text-gray-400">{segment_name}</span> </p>

                    <p className="text-lg font-semibold flex gap-x-2 items-center"><span className="text-orange-500"><MdLocationPin /></span> <span className="text-gray-400">{location}</span> </p>

                    <div className="flex justify-between text-lg font-semibold text-orange-500">
                        <p className="flex items-center"><span className="pr-2"><FaRegSquare /></span> {area}</p>
                        <p className="hover:text-[#23BE0A] cursor-pointer">{price}</p>
                    </div>
                    <p className="text-lg font-semibold">Status: <span className="text-gray-400">{status}</span> </p>
                    <p className="text-lg font-semibold">View: <span className="text-gray-400">{view_property}</span> </p>


                    {/*  */}
                    <div className="text-lg font-semibold text-orange-500 pb-12">
                        <h2 className="text-[#131313CC]">Facilities </h2>
                        {
                            facilities.map((ing, idx) => <p className="text-base ps-4 hover:text-[#23BE0A] cursor-pointer" key={idx}>{ing}</p>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;