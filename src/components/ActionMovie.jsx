import johnwick1 from './../assets/Images/johnWick1.jpg'
import johnwick2 from './../assets/Images/johnWick2.jpg'
import johnwick3 from './../assets/Images/johnWick3.jpg'
import johnwick4 from './../assets/Images/johnWick4.jpg'
function ActionMovie() {
    const TitleMovie = [
        {
            title: "John Wick: Chapter 1",
            image: johnwick1,
        },
        {
            title: "John Wick: Chapter 2",
            image: johnwick2,
        },
        {
            title: "John Wick: Chapter 3",
            image: johnwick3,
        },
        {
            title: "John Wick: Chapter 4",
            image: johnwick4,
        },
    ]
    
    return (
        <div className='mt-20 '>
            <h2 className='text-center mb-12 text-4xl font-bold'>Movie Series</h2>
            <div className='w-full flex justify-around px-14 '>
                {TitleMovie.map((item) => (
                    <div className=' text-gray-300 hover:scale-90 hover:text-blue-300 transition-all duration-250 ease-in-out mb-20 cursor-pointer'  >
                        <img src={item.image} className='object-cover h-[500px] rounded-2xl border-2 border-gray-4 00 shadow-xl shadow-gray-800 hover:border-4 border-gray-400'/>
                        <h2 className='text-center mt-4 text-3xl font-bold'>{item.title}</h2>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default ActionMovie