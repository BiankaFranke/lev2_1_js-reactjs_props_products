import './Product.css';
import '../App.css';

const Product = (props) => {
 
    return (
        <div>
            <div className='smallProduct'>
                <div>
                    <img src={props.imageURL} alt="Lotion" />
                    <h3>{props.productName}</h3>
                    <h3>{props.price}</h3>
                </div>
                <div className='btn'>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Product;