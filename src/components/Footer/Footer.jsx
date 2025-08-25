import { Logo, Twitter, Facebook, Tiktok, Instagram } from "../RoutImages";
import ServicesSection from "./ServicesSection";
import AssistanceSection from "./AssistanceSection";
import "./Footer.scss";

const Footer = () => {
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
        <img src={Twitter} alt="Twitter" className="twitter" />
        <img src={Facebook} alt="Facebook" className="facebook" />
        <img src={Tiktok} alt="Tiktok" className="tiktok" />
        <img src={Instagram} alt="Instagram" className="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
