import Image from 'next/image';
import mainPhoto from '../../public/mainPhoto.png';

const Intro = () => {
    return (
        <div className='flex-col p-4'>
            <h1 className='bg-black text-teal-600 font-bold text-7xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center'>Spencer Attick</h1>
            <h3 className='bg-black text-teal-600 font-bold text-3xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center mx-10'>he/him</h3> 
            <br />
            <h2 className='bg-black text-teal-600 font-bold text-4xl border border-r-red-500 border-b-red-500 border-r-4 border-b-4 p-5 text-center'>Software Engineer</h2> 
            {/* <Image src={mainPhoto} alt=''/> */}
        </div>
    )
}

export default Intro;