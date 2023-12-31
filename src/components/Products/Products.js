import './Products.css';
import StarRateIcon from '@mui/icons-material/StarRate';
const Products=({title,image,price})=>{
    return(
        <>
        <div className='Products'>
            <img src={image} alt=""/>
            <div className='ProductInformtion'>
                <p>{title}</p>
                <div className='ProductsGroup'>
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='ProductRating'>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                    </div>
                </div>
            </div>
            <button>Add To Cart</button>
        </div>
         
        </>
    );
};
export default Products;