# Movie Application 🎬

This is a web-based movie application built with React called "MovieFlix" that utilizes the TMDB (The Movie Database) API to fetch and display a variety of movie-related data. Users can search for movies, view details, and explore various categories of films such as popular, top-rated Or Trending , and Search. The application also includes icons to represent popular, trending this week, and search functionality for a better user experience.

https://github.com/user-attachments/assets/19d4f272-e5cf-48f8-b37d-f9faa85133e6

## Features 🚀
- Search Movies: Users can search for movies by title and view a list of relevant results with a search icon for quick access.
- Popular and Trending Categories: Users can explore popular and trending movies, each represented by distinct icons for easy navigation.
- View Details: Each movie listing links to a detailed view with information such as the synopsis, release date, rating, and genres.
- Category Filters: Movies can be browsed by categories such as popular, top-rated, and upcoming.
- Responsive Design: The application is designed to work seamlessly across various devices, including desktops, tablets, and smartphones.

## Getting Started 🛠️

### Prerequisites
- Node.js (>=14)
- npm or yarn
- TMDB API Key (You can get one by creating an account on [TMDB](https://www.themoviedb.org/) and generating an API key)

### Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/221FA04356/MOVIE-APPLICATION.git
    cd movie-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    # or if using yarn
    yarn install
    ```

3. **Create a `.env` File**:
    - In the root of your project directory, create a `.env` file.
    - Add your TMDB API key:
    ```env
    REACT_APP_TMDB_API_KEY= fa86c00250984d152b30063c80c26731
    ```


4. Start the Development Server:
    ```bash
    npm start
    # or if using yarn
    yarn start
    ```

5. Build for Production:
    ```bash
    npm run build
    ```

## Project Structure 📁


src
├── components      # Reusable components (e.g., MovieCard, Navbar, Footer)
├── pages           # Page components (e.g., HomePage, MovieDetailPage, SearchPage)
├── services        # API service functions to fetch data from TMDB
├── App.js          # Main app component with routes
└── index.js        # Entry point


## Icon Integration 🎨

Icons are used to represent key functionalities:
- Popular Icon: Represents the "Popular Movies" category
- Trending Icon: Represents the "Trending This Week" category
- Search Icon: Represents the search functionality for easy access



## API Integration 🌐
This application interacts with the TMDB API to fetch data. The main API endpoints used are:
- Popular Movies: `/movie/popular`
- Trending Movies: `/trending/movie/week`
- Movie Search: `/search/movie`
- Movie Details: `/movie/{movie_id}`

For detailed API documentation, visit the [TMDB API Documentation](https://developers.themoviedb.org/3).

## Contributing 🤝
Feel free to fork this repository and submit pull requests. For significant changes, please open an issue first to discuss what you would like to change.
