import RoleCard from "./Role-card/RoleCard";

export default function Roles() {
    return (    
        <section className='px-8 bg-(--color-tertiary) relative'>
            <div className="bg-(--color-tertiary)
                            border 
                            border-solid 
                            border-(--color-border) 
                            absolute 
                            flex
                            w-[95%]
                            top-[-14rem] 
                            left-1/2 
                            -translate-x-1/2">
                <RoleCard/>
                <RoleCard/>
                <RoleCard/>
            </div>
        </section>
    );
}