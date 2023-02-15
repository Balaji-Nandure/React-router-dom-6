/** @format */

import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
    // console.log(useParams());
    const { productId } = useParams();
    const product = products.find((prod) => {
        return prod.id === productId;
    });
    // console.log(product);
    const { image, name } = product;
    return (
        <section className='section product'>
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <Link to={`/products`}>Back to Products</Link>
        </section>
    );
};

export default SingleProduct;
