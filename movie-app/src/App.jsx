import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Search from './pages/Search';


const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

