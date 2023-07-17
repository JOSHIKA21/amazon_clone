import "./Header.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Header = ()=>{
    return(
        <>
           <nav className='header'>
            <div className='headerTop'>
                <div className='headerLeftNav'>
                    <MenuIcon />
                </div>
                    <Link to="/">
                        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="logo"/>
                    </Link>
                <div className="headerSearch">
                    <input type="text" className="headerSearchInput" />
                    <SearchIcon className="headerSearchIcon"/>
                </div>
                <div className="headerNavbar">
                    <Link to="/Login" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Hello</span>
                            <span className="headerOption_two">User</span>
                        </div>
                    </Link>

                    <Link to="/Order" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Return &</span>
                            <span className="headerOption_two">Order</span>
                        </div>
                    </Link>

                    <Link to="/Prime" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Try</span>
                            <span className="headerOption_two">Prime</span>
                        </div>
                    </Link>

                    <Link to="/Profile" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Your</span>
                            <span className="headerOption_two">Profile</span>
                        </div>
                    </Link>

                    <Link to="/Cart" className="headerLink">
                        <div className="headerOptions_Basket">
                            <ShoppingBasketIcon />
                            <span className="headerOption_two">4</span>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="headerBottom_Navbar">
                <div className="headerBottom">
                <div className="headerAddress">
                    <div className="headerAddress_Icon">
                        <LocationOnIcon />
                    </div>
                    <div className="headerOptions">
                            <span className="headerOption_One">Deliver To</span>
                            <span className="headerOption_two">India</span>
                    </div>
                </div>
                <div className="headerbottom_Navbar">
                    <span>
                    <Link to="/ListProduct" className="headerLink">
                        All products
                    </Link>
                </span>
                <span>Book</span>
                <span>New Release</span>
                <span>Gift Ideas</span>
                <span>Easy Coding</span>
                <span>Amazon Pay</span>
                </div>
            </div>
            </div>
           </nav>
        </>
    );
};
export default Header;