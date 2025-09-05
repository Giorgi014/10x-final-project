import { Logo, Twitter, Facebook, Tiktok, Instagram } from "../RoutImages";
import ServicesSection from "./ServicesSection";
import AssistanceSection from "./AssistanceSection";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";

const media = [
  {
    id: 1,
    img: Twitter,
    path: "/error",
    label: "Twitter",
    className: "twitter",
  },
  {
    id: 2,
    img: Facebook,
    path: "/error",
    label: "Facebook",
    className: "facebook",
  },
  { id: 3, img: Tiktok, path: "/error", label: "Tiktok", className: "tiktok" },
  {
    id: 4,
    img: Instagram,
    path: "/error",
    label: "Instagram",
    className: "instagram",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <footer>
      <article className="footer_container">
        <section className="logo_description">
          <img src={Logo} alt="Logo" className="logo_img" />
          <p className="description">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </section>
        <ServicesSection />
        <AssistanceSection />
      </article>
      <div className="social_media">
        {media.map(({ id, img, path, label, className }) => (
          <img key={id} src={img} alt={label} className={className} onClick={() => handleNavigate(path)} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
