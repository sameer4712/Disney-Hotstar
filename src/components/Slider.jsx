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
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

function Slider() {
    const TitleMovie = [
        {
            title: "Avengers: Endgame",
            image: Avenger,
        },
        {
            title: "The Lion King",
            image: LionKing
        },
        {
            title: "Frozen II",
            image: Frozen2,
        },
        {
            title: "Black Panther",
            image: blackpanther,
        },
        {
            title: "Avatar: The Way of Water",
            image: avatar,
        },
        {
            title: "Incredibles 2",
            image: incredible,
        },
        {
            title: "Guardians of the Galaxy",
            image: guardian,
        },
        {
            title: "Toy Story 4",
            image: toystory,
        },
        {
            title: "Doctor Strange",
            image: doctorstrange,
        },
        {
            title: "Moana",
            image: moana,
        },
        {
            title: "Seven",
            image: seven,
        },
        {
            title: "Fight Club",
            image: fightclub,
        },
        {
            title: "Titanic",
            image: Titanic,
        }
    ];
    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft += 1400
    }
    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft -= 1400
    }


    return (
        <div>


            <HiChevronLeft className='hidden md:block text-white text-[55px] absolute  mt-[150px] cursor-pointer'
                onClick={slideLeft} />


            <div id='slider' className='flex  w-full overflow-x-scroll px-11 scrollbar-hide snap-x snap-mandatory scroll-smooth' >
                {TitleMovie.map((movie, index) => (
                    <div key={index} className='min-w-[1400px] flex-shrink-0 py-4' >
                        <div className='mr-6 mb-4' >
                            <img src={movie.image} className='w-full h-[400px] object-left-top mr-5 rounded-3xl hover:border-[3px] border-gray-400 transition-all duration-100 ease-in-out' />
                            <h3 className='text-center text-teal-200 text-4xl mb-2 py-7'>{movie.title}</h3>
                        </div>

                    </div>
                )
                )}
                <div>
                    <HiChevronRight className='hidden md:block text-white text-[55px] absolute  mt-[150px] right-0 cursor-pointer'
                        onClick={slideRight} />
                </div>
            </div>

        </div>




    )
}

export default Slider