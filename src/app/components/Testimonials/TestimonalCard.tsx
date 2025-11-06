"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useState } from 'react';

interface TestimonialCardProps {
    image: StaticImageData | string;
    message: string;
    name: string;
    title: string;
}

export function TestimonialCard({ image, message, name, title }: TestimonialCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card className="flex flex-col items-center text-center p-6 border-none shadow-none">
                <div className="w-32 h-32 mb-4">
                    <Image
                        src={image}
                        alt={`Photo of ${name}`}
                        className="w-full h-full object-cover rounded-full border border-border/50"
                    />
                </div>
                <CardContent className="flex flex-col items-center gap-2">
                    <blockquote aria-label={message}
                        role="button"
                        tabIndex={0}
                        className="italic text-muted-foreground 
                                           mb-4 max-w-sm cursor-pointer 
                                           select-none"
                        onClick={() => setOpen(true)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}>
                        “{message.length > 150 ? message.slice(0, 50) + '…' : message}”
                        {message.length > 150 && (
                            <span className="text-xs text-muted-foreground sm:hidden block mt-1">
                                Tap to read more
                            </span>
                        )}
                    </blockquote>
                    <figcaption>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-muted-foreground">{title}</p>
                    </figcaption>
                </CardContent>
            </Card>

            {/* Modal for full message */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-lg w-full bg-(--color-tertiary) text-(--color-primary)">
                    <DialogHeader>
                        <DialogTitle>Testimonial</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="mt-2 whitespace-pre-line">
                        {message}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </>
    );
}
