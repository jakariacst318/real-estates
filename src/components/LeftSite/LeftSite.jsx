import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSite = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-semibold">All Categories</h2>
            {
                categories.map(category => <Link className="block ml-6 text-xl font-medium"
                    key={category.id}
                    to={`category ${category.id}`}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSite;