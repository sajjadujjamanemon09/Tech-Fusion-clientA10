/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandNames = ({product}) => {

    const { brand, image} = product;

    return (
       <Link to='/products'>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={image} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
              </div>
            </div>
        </div>
       </Link>
    );
};

export default BrandNames;