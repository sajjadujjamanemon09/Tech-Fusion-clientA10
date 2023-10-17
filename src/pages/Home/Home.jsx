import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandNames from "../../components/BrandNames/BrandNames";


const Home = () => {

    const products = useLoaderData();


    return (
        <div>
            <Banner></Banner>

            
            <h2>Brands : {products.length}</h2>
            {
                products.map(product => <BrandNames
                key={product._id}
                product={product}
                ></BrandNames>)
            }
        </div>
    );
};

export default Home;