export default function Intro() {
    return (
        <section className='px-4 sm:px-8
                            pt-[9rem] 
                            pb-[18rem] 
                            bg-(--color-primary) 
                            text-(--color-tertiary)
                            relative z-1'>
            <div className='w-full sm:w-[60%] mx-auto'>
                <h1 className='text-center'>
                    Hi, I&#39;m Joe. Nice to meet you.
                </h1>
                <h2 className='leading-[1.8rem] text-center'>
                  Since starting my journey as a frontend developer 8 years ago, I&#39;ve built high-quality websites and hybrid mobile apps, shipped features on large-scale platforms like <strong>Bill.com</strong>, and created a full e-learning platform <strong>Ethrai</strong> serving over a million users. I&#39;ve collaborated with talented teams to turn complex problems into scalable, maintainable solutions. Quietly confident, naturally curious, and always focused on crafting digital experiences that both users and developers love.
                </h2>
            </div>
        </section>
    );
}