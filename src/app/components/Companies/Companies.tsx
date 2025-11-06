
import { companiesLogo } from "@/app/data/companies-logo.data";
import Image from 'next/image';

export default function Companies() {
    return (
        <section className='px-4 sm:px-8 py-[4.5rem] custom-border'>
            <div className="w-full sm:w-1/2 mx-auto">
                <h1 className="text-center">I&#39;m proud to have collaborated with some awesome clients & companies:</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 place-items-center">
                {
                    companiesLogo.map((company, i) => (
                        <figure key={i} className="w-40 h-40 flex items-center justify-center">
                            <Image 
                                src={company.image}
                                alt={company.title} />
                        </figure>
                    ))
                }

            </div>
        </section>
    );
}