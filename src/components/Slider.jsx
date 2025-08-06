import React from 'react'

function Slider() {
    const TitleMovie = [
        {
            title: "Avengers: Endgame",
            image: "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
            genre: "Action"
        },
        {
            title: "The Lion King",
            image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
            genre: "Animation"
        },
        {
            title: "Frozen II",
            image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
            genre: "Fantasy"
        },
        {
            title: "Black Panther",
            image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            genre: "Superhero"
        },
        {
            title: "Avatar: The Way of Water",
            image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            genre: "Sci-Fi"
        },
        {
            title: "Incredibles 2",
            image: "https://image.tmdb.org/t/p/w500/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
            genre: "Animation"
        },
        {
            title: "Guardians of the Galaxy",
            image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
            genre: "Action"
        },
        {
            title: "Toy Story 4",
            image: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
            genre: "Animation"
        },
        {
            title: "Doctor Strange",
            image: "https://image.tmdb.org/t/p/w500/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
            genre: "Superhero"
        },
        {
            title: "Moana",
            image: "https://image.tmdb.org/t/p/w500/2klgJ8lR7D5EAL8PqUEbaGg0bxj.jpg",
            genre: "Adventure"
        }
    ];

    return (
        <div>
            {TitleMovie.map((movie, index) => (
                <div key={index} >
                    <div className='gap-8'>
                        <img src="movie.image" />
                        <h3>{movie.title}</h3>
                        <p>{movie.genre}</p>
                        
                    </div>

                </div>
            )
            )}
        </div>
    )
}

export default Slider