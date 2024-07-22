import '../App.css';
const ProductCard = ({ img, Title, price, description }) => {
    return (
        <div className="container">

            <div className="card">
                <div className="card-body">
                    <dic className="row">
                        <div className="col-md-12">
                            <img  src={img} alt="" srcset="" /><br />
                            <h5>Title:-{Title}</h5>
                        </div>
                    </dic>
                    <hr />
                    {/* props =>like parameter but not (but cannot change it) */}
                    <div className="row">
                        <div className="col-md-6"><h5>Price Rs.{price}</h5></div>
                        <div className="col-md-6"><h5>Description {description}</h5></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;