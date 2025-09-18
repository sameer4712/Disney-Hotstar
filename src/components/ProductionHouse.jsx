import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import starwar from './../assets/Images/starwar.png'
import pixar from './../assets/Images/pixar.png'
import nationalG from './../assets/Images/nationalG.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import starwarV from './../assets/Videos/star-wars.mp4'
import nationalGV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import { startSession } from 'mongoose'


function ProductionHouse() {
    const cardList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: starwar,
            video: starwarV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGV
        }
    ]
    return (
        <div className='w-full flex md:px-12 gap-5 '>
            {cardList.map((item) => (

                <div className='border-2 border-gray-500 shadow-lg shadow-gray-800 bg-gray-800 hover:scale-110 rounded-lg transition-all duration-300 ease-in-out cursor-pointer'>
                    <video src={item.video} autoPlay loop playsInline muted className='absolute rounded-lg opacity-0 hover:opacity-70' />
                    <img src={item.image} className='w-full z-10 ' />
                </div>
            ))}

        </div>
    )
}

export default ProductionHouse