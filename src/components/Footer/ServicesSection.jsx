import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Bonus program", path: "/bonus_programs" },
    { name: "Gift cards", path: "/gifts" },
    { name: "Credit and payment", path: "/credits" },
    { name: "Service contracts", path: "/service_contracts" },
    { name: "Non-cash account", path: "/non_cashout" },
    { name: "Payment", path: "/payments" },
  ];

  return (
    <article className="service_section_container">
      <h2 className="services">Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} onClick={() => navigate(service.path)}>
            {service.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServicesSection;
