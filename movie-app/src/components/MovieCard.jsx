const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="movie-poster"
            />
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">★ {movie.vote_average}/10</p>
                <p className="movie-date">{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;