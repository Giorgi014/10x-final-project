import {
  Screen,
  Cpu,
  Cores,
  Main_camera,
  Front_camera,
  Battery,
} from "../../RoutImages";
import "./ItemDetail.scss";

export const ItemDetail = () => {
  return (
    <article className="item_detail_container">
      <section className="item_detail">
        <img src={Screen} alt="screen" />
        <div className="details">
          <p className="name_item">Screen size</p>
          <p className="detail">6.7</p>
        </div>
      </section>
      <section>
        <img src={Cpu} alt="cpu" />
        <div className="details">
          <p className="name_item">CPU</p>
          <p className="detail">Apple A16 Bionic</p>
        </div>
      </section>
      <section>
        <img src={Cores} alt="cores" />
        <div className="details">
          <p className="name_item">Number of Cores</p>
          <p className="detail">6</p>
        </div>
      </section>
      <section>
        <img src={Main_camera} alt="main camera" />
        <div className="details">
          <p className="name_item">Main camera</p>
          <p className="detail">48-12 -12 MP</p>
        </div>
      </section>
      <section>
        <img src={Front_camera} alt="front camera" />
        <div className="details">
          <p className="name_item">Front-camera</p>
          <p className="detail">12MP</p>
        </div>
      </section>
      <section>
        <img src={Battery} alt="battery" />
        <div className="details">
          <p className="name_item">Battery capacity</p>
          <p className="detail">4323 mAh</p>
        </div>
      </section>
    </article>
  );
};
