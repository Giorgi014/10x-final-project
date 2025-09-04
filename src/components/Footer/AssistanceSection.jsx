import { useNavigate } from "react-router-dom";

const AssistanceSection = () => {
  const navigate = useNavigate();

  const assistanceLinks = [
    { name: "Find an order", path: "/find_order" },
    { name: "Terms of delivery", path: "/delivery_terms" },
    { name: "Exchange and return of goods", path: "/exchange" },
    { name: "Guarantee", path: "/guarantee" },
    { name: "Frequently asked questions", path: "/questions" },
    { name: "Terms of use of the site", path: "/terms" },
  ];

  return (
    <article className="assistance_container">
      <h2 className="assistance">Assistance to the buyer</h2>
      <ul>
        {assistanceLinks.map((item, index) => (
          <li key={index} onClick={() => navigate(item.path)}>
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AssistanceSection;
