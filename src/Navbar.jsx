
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                <Link to="/addusers">About</Link>
            </nav>
            
        </>
    )
}

export default Navbar
