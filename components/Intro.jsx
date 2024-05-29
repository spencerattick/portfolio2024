import Image from 'next/image';
import cyclingPhoto from '../public/cyclingPhoto.png';

const Intro = () => {
    return (
        <div className='flex justify-center items-start h-screen relative'>
            <div className='absolute inset-0 z-0 opacity-95'>
                <Image src={cyclingPhoto} layout="fill" objectFit="cover" objectPosition="center" alt="Main Photo" />
            </div>

            <div className='max-w-md relative z-10 mt-20 md:mt-32 lg:mt-40 flex flex-wrap justify-center p-4'>
                <h1 className='bg-black text-teal-600 font-bold text-4xl md:text-5xl lg:text-7xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center border-transparent text-nowrap'>
                    SPENCER ATTICK
                </h1>
                <h3 className='bg-black text-teal-600 font-bold text-2xl md:text-3xl lg:text-4xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 px-2 py-3 md:px-4 md:py-5 lg:px-0 lg:py-5 text-center mx-16 md:mx-24 lg:mx-32 mt-[-20px] border-transparent'>
                    he/they
                </h3> 
                <br />
                <h2 className='bg-black text-teal-600 font-bold text-2xl md:text-3xl lg:text-4xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center border-transparent mt-5'>
                    Software Engineer
                </h2> 
            </div>
        </div> 
    );
}

export default Intro;
