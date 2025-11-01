import { Role } from "@/app/data/roles.data";

type RoleCardProps = {
  role: Role;
};

export const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <div className="shadow-md p-6 px-[70px] py-[45px] hover:shadow-lg hover:-translate-y-21 transition-transform duration-200">
      <div className="text-center text-4xl mb-4">{role.icon}</div>
      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
      <p className="mb-4 text-sm">{role.description}</p>

      {role.sections.map((section) => (
        <div key={section.heading} className="mb-4">
          <h4 className="text-(--color-primary) font-semibold text-sm mb-1">{section.heading}</h4>
          <ul className="list-disc list-inside text-sm">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
