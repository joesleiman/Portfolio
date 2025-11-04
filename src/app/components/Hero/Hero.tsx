
import Image from 'next/image';
import linkedinProfile from '@/app/assets/images/linkedin-profile.jpg';
import heroDevices from '@/app/assets/images/hero-devices.svg';

export default function Hero() {
    return (
        <section className='px-4 sm:px-8'>
            <div className='flex flex-col items-center pt-[3rem] pb-[3rem]'>
                <h1 className='text-(--color-secondary)'>
                    Senior Front-End Engineer & UI Craftsman
                </h1>
                <h2 className='font-medium mb-[1.5rem]'>
                    I bring designs to life with clean code, thoughtful details, and a love for great user experiences
                </h2>
                <Image className='rounded-full w-[212px] mt-[2rem]'
                    src={linkedinProfile}
                    alt='LinkedIn Profile' />
            </div>
            <Image src={heroDevices} alt='Hero Devices'
                className='h-auto md:max-w-[685px] lg:max-w-[860px] mx-auto' />
        </section>
    );
}