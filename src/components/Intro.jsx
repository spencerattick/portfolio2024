import Image from 'next/image';
import mainPhoto from '../../public/mainPhoto.png';

const Intro = () => {
    return (
        <div className='flex justify-center items-center h-screen relative'>
            <div className='absolute inset-0 z-0'>
                <Image src={mainPhoto}  objectFit="cover" width={1700} alt="Main Photo" />
            </div>

            <div className='max-w-md relative z-10 mt-[-350px] flex flex-wrap justify-center'>
                <h1 className='bg-black text-teal-600 font-bold text-8xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center border-transparent text-nowrap'>Spencer Attick</h1>
                <h3 className='bg-black text-teal-600 font-bold text-2xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 px-0 py-5 text-center mx-32 mt-[-20px] border-transparent'>he/him</h3> 
                <br />
                <h2 className='bg-black text-teal-600 font-bold text-3xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center border-transparent'>Software Engineer</h2> 
            </div>
        </div> 
    );
}

export default Intro;
