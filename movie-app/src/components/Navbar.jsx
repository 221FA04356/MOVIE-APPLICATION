import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">MovieFlix</h1>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/trending" className="nav-link">Trending</Link>
                    <Link to="/search" className="nav-link">Search</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;