import {
  Screen,
  Cpu,
  Cores,
  Main_camera,
  Front_camera,
  Battery,
} from "../../RoutImages";
import "./ItemDetail.scss";

export const ItemDetail = ({ details }) => {
  const itemDetails = [
    { img: Screen, label: "Screen size", value: details?.screen?.size || details?.screen || "-" },
    { img: Cpu, label: "CPU", value: details?.cpu || "-" },
    { img: Cores, label: "Number of Cores", value: details?.cores || "-" },
    { img: Main_camera, label: "Main camera", value: details?.mainCm || "-" },
    { img: Front_camera, label: "Front-camera", value: details?.frontCm || "-" },
    { img: Battery, label: "Battery capacity", value: details?.battery || "-" },
  ];

  return (
    <article className="item_detail_container">
      {itemDetails.map((detail, index) => (
        <section key={index} className="item_detail">
          <img src={detail.img} alt={detail.label.toLowerCase()} />
          <div className="details">
            <p className="name_item">{detail.label}</p>
            <p className="detail">{detail.value}</p>
          </div>
        </section>
      ))}
    </article>
  );
};
