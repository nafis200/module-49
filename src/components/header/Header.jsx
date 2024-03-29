import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <Link to="/" className="mr-2 bg-green-400">Home</Link> 
           <Link to="/login" className="bg-red-400 ml-5">Login</Link>
        </div>
    );
};

export default Header;

