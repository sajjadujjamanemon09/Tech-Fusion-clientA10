import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const UpdateNow = () => {

    const updateProduct = useLoaderData();
    const { _id, name, brand, type, price, description, image, rating } =updateProduct

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const rating = form.rating.value;

        const updatedProduct = { name, brand, type, price, description, image, rating }
        

        console.log(updatedProduct); 

        // send data to the server
        fetch(`https://assignment-10-server-five-rho.vercel.app/singleProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                swal("Success!","Product Updated Successfully", "success")
            }
        })
    }

    return (
        <div className="bg-base-300 rounded-xl p-14 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold pb-8">Update A Product</h2>
        <p>Discover the latest in electronic devices and accessories at <span className="text-red-500">Tech Fusion X</span>. From smartphones to computers and a wide array of tech gear, we have got it all. Plus, you can contribute to our collection by submitting new products through our user-friendly form. Join our tech-savvy community and stay on the cutting edge of innovation.</p>
        </div>
        <form onSubmit={handleUpdateProduct}>
            {/* name and Brand name Row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* type & price row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" defaultValue={price} placeholder="$ Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* description & image url row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" defaultValue={rating} placeholder="__ out of 5" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Rating row */}
            <div className="mb-8">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="UPDATE NOW" className="btn btn-block bg-slate-800 text-white" />

        </form>
    </div>
    );
};

export default UpdateNow;