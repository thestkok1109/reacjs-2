import { useState } from "react";
import data from "./dataGlasses.json";

export default function GlassesApp() {
  const [glassesList] = useState(data);
  const [selected, setSelected] = useState(data[0]);

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <div className="glasses-container">
      <h2 className="title">TRY GLASSES APP ONLINE</h2>

      <div className="model-box">
        <div className="model-image">
          <img src="/glassesImage/model.jpg" alt="model" className="face" />
          <img
            src={`/glassesImage/${selected.url.split("/").pop()}`}
            alt={selected.name}
            className="glass-on-face"
          />
          <div className="glass-info">
            <strong>{selected.name}</strong> - ${selected.price}
            <p>{selected.desc}</p>
          </div>
        </div>
      </div>

      <div className="glasses-list">
        {glassesList.map((item) => (
          <img
            key={item.id}
            src={`/glassesImage/${item.url.split("/").pop()}`}
            alt={item.name}
            className={`glass-thumb ${
              selected.id === item.id ? "active" : ""
            }`}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
