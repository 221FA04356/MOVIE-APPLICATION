import { useState, useEffect } from 'react';
import api from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await api.get('/trending/movie/week');
                setMovies(response.data.results);
            } catch (err) {
                setError('Failed to fetch trending movies');
            } finally {
                setLoading(false);
            }
        };

        fetchTrending();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="container">
            <h2 className="section-title">Trending This Week</h2>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Trending;
