"use client";

import { useRouter } from "next/navigation";

type CallToActionProps = {
    title: string;
    description: string;
    btnText: string;
}

export function CallToAction({title, description, btnText}: CallToActionProps) {
    const router = useRouter();

    return (
        <div className="mt-12 text-center">
            <div className="inline-block p-8 bg-(--color-tertiary) rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-(--color-secondary) mb-3">
                    {title}
                </h3>
                <p className="mb-6">
                    {description}
                </p>
                <button
                    className="px-8 py-3 bg-(--color-primary) text-(--color-tertiary) rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => router.push("/contact")}>
                    {btnText}
                </button>
            </div>
        </div>
    );
}