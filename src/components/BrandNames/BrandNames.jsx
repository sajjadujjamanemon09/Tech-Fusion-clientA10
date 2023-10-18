/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandNames = ({product}) => {

    const { brand, image} = product;

    return (
        <div>
           <Link to={`/products/${brand}`}>
           <div className="card shadow-xl bg-base-300">
              <figure className="px-4 pt-4">
                <img className="rounded-xl" src={image} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-cyan-700">{brand}</h2>
              </div>
            </div>
           </Link>
        </div>
    );
};

export default BrandNames;