import { useState } from "react";
import glassesData from "./dataGlasses";
import "./App.css";

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="app">
      <h1>TRY GLASSES APP ONLINE</h1>
      <div className="model">
        <div className="left">
          <img src="./model.jpg" alt="model" className="model-img" />
          {selectedGlasses && (
            <img
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
              className="glasses"
            />
          )}
          {selectedGlasses && (
            <div className="info">
              <h2>{selectedGlasses.name}</h2>
              <p>{selectedGlasses.desc}</p>
            </div>
          )}
        </div>
        <div className="right">
          <img src="./model.jpg" alt="model" className="model-img" />
          {selectedGlasses && (
            <img
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
              className="glasses"
            />
          )}
          {selectedGlasses && (
            <div className="info">
              <h2>{selectedGlasses.name}</h2>
              <p>{selectedGlasses.desc}</p>
            </div>
          )}
        </div>
      </div>

      <div className="glasses-list">
        {glassesData.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.name}
            onClick={() => handleSelectGlasses(item)}
            className="glasses-thumb"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
