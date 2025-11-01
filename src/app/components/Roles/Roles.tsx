import { roles } from "@/app/data/roles.data";
import { RoleCard } from "./Role-card/RoleCard";

export default function Roles() {
    return (
        <section className='px-8 bg-(--color-tertiary) relative'>
            <div className="bg-(--color-tertiary)
                            border 
                            border-solid 
                            border-(--color-border) 
                            absolute 
                            grid md:grid-cols-3 items-stretch
                            w-[95%]
                            top-[-14rem] 
                            left-1/2 
                            -translate-x-1/2">
                {roles.map((role) => (
                    <RoleCard key={role.id} role={role} />
                ))}
            </div>
        </section>
    );
}