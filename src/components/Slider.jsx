import Avenger from './../assets/Images/avenger.jpg'
import LionKing from './../assets/Images/the lion king.jpg'
import Frozen2 from './../assets/Images/frozen2.webp'
import blackpanther from './../assets/Images/blankpanther.webp'
import avatar from './../assets/Images/avatar.webp'
import incredible from './../assets/Images/incredible.webp'
import guardian from './../assets/Images/guardian of the galaxy.webp'
import toystory from './../assets/Images/toy story.webp'
import doctorstrange from './../assets/Images/doctorstrange.webp'
import moana from './../assets/Images/moana.webp'
import seven from './../assets/Images/seven.webp'
import fightclub from './../assets/Images/fight club.webp'
import Titanic from './../assets/Images/titanic.webp'
import './../index.css'

function Slider() {
    const TitleMovie = [
        {
            title: "Avengers: Endgame",
            image: Avenger,
            genre: "Action"
        },
        {
            title: "The Lion King",
            image: LionKing,
            genre: "Animation"
        },
        {
            title: "Frozen II",
            image: Frozen2,
            genre: "Fantasy"
        },
        {
            title: "Black Panther",
            image: blackpanther,
            genre: "Superhero"
        },
        {
            title: "Avatar: The Way of Water",
            image: avatar,
            genre: "Sci-Fi"
        },
        {
            title: "Incredibles 2",
            image: incredible,
            genre: "Animation"
        },
        {
            title: "Guardians of the Galaxy",
            image: guardian,
            genre: "Action"
        },
        {
            title: "Toy Story 4",
            image: toystory,
            genre: "Animation"
        },
        {
            title: "Doctor Strange",
            image: doctorstrange,
            genre: "Superhero"
        },
        {
            title: "Moana",
            image: moana,
            genre: "Adventure"
        },
        {
            title: "Seven",
            image: seven,
            genre: "Adventure"
        },
        {
            title: "Fight Club",
            image: fightclub,
            genre: "Adventure"
        },
        {
            title: "Titanic",
            image: Titanic,
            genre: "Adventure"
        }
    ];

    return (
        <div className='flex  w-full px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth'>
            {TitleMovie.map((movie, index) => (
                <div key={index} className='min-w-[800px] flex-shrink-0 ' >
                    <div className='mr-6'>
                        <img src={movie.image} className='w-full h-[400px] object-cover mr-5'/>
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