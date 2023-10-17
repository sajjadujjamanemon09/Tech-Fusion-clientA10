

const AddProducts = () => {
    return (
        <div className="bg-base-300 rounded-xl p-14 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold pb-8">Add New Product</h2>
        <p>Discover the latest in electronic devices and accessories at <span className="text-red-500">Tech Fusion X</span>. From smartphones to computers and a wide array of tech gear, we have got it all. Plus, you can contribute to our collection by submitting new products through our user-friendly form. Join our tech-savvy community and stay on the cutting edge of innovation.</p>
        </div>
        <form>
            {/* name and Brand name Row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
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
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="$ Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* description & photo url row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Rating row */}
            <div className="mb-8">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        {/* <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" /> */}
                        <div className="rating pt-2 gap-4">
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
                        </div>
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Product" className="btn btn-block bg-slate-800 text-white" />

        </form>
    </div>
);
};

export default AddProducts;