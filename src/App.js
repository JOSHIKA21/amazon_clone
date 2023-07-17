import'./App.css';
import Header from "./layout/Header/Header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from './layout/Footer/Footer';
import Login from './components/Login/Login';
import ListProduct from './components/ListProduct/ListProduct';
import Order from './components/Orders/Order';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
const App=()=>{
    return (
        <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={[<Header />,<Home />, <Footer />]}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/ListProduct" element={[<Header />,<ListProduct />, <Footer />]}></Route>
                    <Route path="/Order" element={[<Header />,<Order />, <Footer />]}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/Cart" element={[<Header />,<Cart />, <Footer />]}></Route>
                </Routes>
            </div>
        </Router>
        </>
    )
}
export default App