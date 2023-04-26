import "./style.css";
import Cards from "../../Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";

const REACT_APP_KEY = "8e6ce7c9d3904927873160949232404";
const REACT_APP_API = "http://api.weatherapi.com/v1/current.json?";
export default function ClimaApp() {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "London") {
    try {
      const request = await fetch(
        `${REACT_APP_API}key=${REACT_APP_KEY}&q=${city}&aqi=no`
      );

      const res = await request.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <Fragment>
      <div className="container">
        <WeatherForm onChangeCity={handleChangeCity} />
        <h2>God day user!</h2>
        <h3>tiempo en</h3>
        <FontAwesomeIcon icon={faCloudBolt} className="lluvia" />
        <p className="grados">grados</p>
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
