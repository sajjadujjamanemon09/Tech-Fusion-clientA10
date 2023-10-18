import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandNames from "../../components/BrandNames/BrandNames";
import ContactUs from "../../components/ContactUs/ContactUs";
import NewArrivals from "../../components/NewArrivals/NewArrivals";


const Home = () => {

    const products = useLoaderData();


    return (
        <div>
            <Banner></Banner>


            <div className=" text-center pt-20 pb-12 p-3">
            <h2 className="text-5xl font-bold pb-4">All Brands</h2>
            <p className="md:w-[80vh] mx-auto">Our mission is to provide you with a one-stop shop for all your tech needs, making it easier than ever to stay connected, productive, and entertained.</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
           {
                products.map(product => <BrandNames
                key={product._id}
                product={product}
                ></BrandNames>)
            }
           </div>
           <NewArrivals></NewArrivals>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;