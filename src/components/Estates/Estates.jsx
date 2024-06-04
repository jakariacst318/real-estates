import PropTypes from 'prop-types';
import { FaRegSquare } from "react-icons/fa";

const Estates = ({ estates }) => {

    const { estate_title, segment_name, image ,area,price} = estates;

    return (
        <div>            
            <div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="image" /></figure>
                    <div className="card-body">
                        <p className='text-lg text-slate-500'>{estate_title}</p>
                        <h2 className="card-title">{segment_name}</h2>

                        <div className='flex justify-between font-semibold text-xl py-2 text-orange-500'>
                            <p className='flex items-center gap-x-2'><span><FaRegSquare /></span> {area}</p>
                            <p className=''>{price}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estates;

Estates.propTypes = {
    children: PropTypes.node
}