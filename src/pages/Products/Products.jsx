import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Slider from "../../components/Slider/Slider";


const Products = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div className="max-w-5xl mx-auto">
            
            <div>
                <Slider></Slider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                loaderData.map((singleProduct) => <Product key={singleProduct._id} product={singleProduct}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;