import { useState } from 'react';
import api from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        try {
            const response = await api.get('/search/movie', {
                params: { query: query }
            });
            setMovies(response.data.results);
            setError(null);
        } catch (err) {
            setError('Failed to search movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="search-section">
                <h2 className="section-title">Search Movies</h2>
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter movie name..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>

            {loading && <Loading />}
            {error && <div className="error">{error}</div>}
            
            {movies.length > 0 && (
                <div className="movie-grid">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
