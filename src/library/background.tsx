import Image from 'next/image';
import BackgroundImage from '@/public/assets/images/general/suit.jpg'


const Background = () => {
    return <section className='w-screen h-screen z-10 fixed'>
        <Image alt='bg-img' src={BackgroundImage} className='w-full h-full z-10 object-contain opacity-[0.1]'/>

    </section>
};


export default Background;