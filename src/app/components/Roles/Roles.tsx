import { roles } from "@/app/data/roles.data";
import { RoleCard } from "./Role-card/RoleCard";

export default function Roles() {
    return (
        <section className='px-4 sm:px-8 pb-[1rem] bg-(--color-tertiary)'>
            <div className="bg-(--color-tertiary)
                            border 
                            border-solid 
                            border-(--color-border) 
                            grid md:grid-cols-3 items-stretch
                            w-full
                            mt-[-14rem] relative z-2">
                {roles.map((role) => (
                    <RoleCard key={role.id} role={role} />
                ))}
            </div>
        </section>
    );
}