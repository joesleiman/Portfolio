import { testimonials } from "@/app/data/testimonials.data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { TestimonialCard } from "./TestimonalCard";

export default function Testimonials() {
    return (
        <section className='px-4 sm:px-8
                            py-[5rem] custom-border'>
            <div className="text-center">
                <h1>testimonials</h1>
                <h2 className="font-medium">Proof that I’m not just pretending to be awesome...</h2>
            </div>

            <Carousel orientation="vertical" 
                      className="mt-[4.5rem] w-full max-w-md mx-auto" 
                      opts={{
                        align: "start",
                        loop: true,
                      }}
            >
                <CarouselContent className="h-[400px]">
                    {testimonials.map((t, i) => (
                        <CarouselItem key={i} 
                                      className="flex items-center justify-center pt-0">
                            <TestimonialCard {...t} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}