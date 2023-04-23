import "./style.css";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState,  } from "react";

function App() {
  const [ciudad, setciudad] = useState("Bogota");
  const [pais, setPais] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [valor , setValor ] = useState('')
  const appId = "3935e24d25c491e6ff2069ac32274f4f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},mexico&appid=${appId}`;

  useEffect(() => {
    const DatosApi = async (url) => {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setPais(resultado.sys.country);
      setTemperatura(resultado.main.temp);
    };
    DatosApi(url);

  }, []);



  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <input
            placeholder="ciudad"
            type="text"
          ></input>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h2>God day user!</h2>
        <h3>
          tiempo en {ciudad} / {pais}{" "}
        </h3>
        <FontAwesomeIcon icon={faCloudBolt} className="lluvia" />
        <p className="grados">{temperatura}</p>
        <p className="datos"> clouds 21ºC/24ºC</p>
        <p className="text"> Forecast the next 7 days</p>
        <div className="cardDays">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
