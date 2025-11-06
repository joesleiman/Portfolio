import { Card, CardContent } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import Image from 'next/image';

interface TestimonialCardProps {
    image: StaticImageData | string;
    message: string;
    name: string;
    title: string;
}

export function TestimonialCard({ image, message, name, title }: TestimonialCardProps) {
    return (
        <Card className="flex flex-col items-center text-center p-6 border-none shadow-none">
            <div className="w-24 h-24 mb-4">
                <Image
                    src={image}
                    alt={`Photo of ${name}`}
                    className="w-full h-full object-cover rounded-full border border-border/50"
                />
            </div>
            <CardContent className="flex flex-col items-center gap-2">
                <blockquote className="italic text-muted-foreground mb-4 max-w-sm">
                    “{message}”
                </blockquote>
                <figcaption>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-muted-foreground">{title}</p>
                </figcaption>
            </CardContent>
        </Card>
    );
}
