import Tarzan from './../assets/Images/tarzan.webp'
import despicable from './../assets/Images/despicableme2.webp'
import dragon from './../assets/Images/dragon.webp'
import RiseOfTheGuardian from './../assets/Images/riseoftheguardians.jpg'
import tintin from './../assets/Images/tintin.jpg'
import rango from './../assets/Images/rango.jpg'

function AnimationMovies() {
    const AnimationList = [
        {
            title: "TARZAN",
            image: Tarzan,
        },
        {
            title: "DESPICABLE ME 2",
            image: despicable
        },
        {
            title: "HOW TO TRAIN YOUR DRAGON 3",
            image: dragon,
        },
        {
            title: "THE ADVENTURE OF TINTIN",
            image: tintin,
        },
        {
            title: "RANGO",
            image: rango,
        },
        {
            title: "RISE OF THE GUARDIAN",
            image: RiseOfTheGuardian,
        },
    ]
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Top Animation Movies</h1>
            <div className='flex justify-center gap-7 px-10 mt-20'>
                {AnimationList.map((item) => (
                    <div className=' text-gray-300 hover:scale-110 transition-all duration-400 ease-in-out cursor-pointer hover:text-blue-300'>
                        <img src={item.image} className=' w-full h-[400px] border-1 rounded-lg' />
                        <h2 className=' mt-8 text-center font-bold text-2xl mb-10'>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default AnimationMovies