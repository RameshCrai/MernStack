import ProductCard from "../../UI/ProductCard";
import product from '../../product.json'
const DisplayProduct = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    product.map((prod, i) => (
                        <ProductCard img={prod.product_image} Title={prod.product_name} price={prod.product_price} description={prod.product_des} />
                    )
                    )}

            </div>
        </div>
    )
}

export default DisplayProduct;