import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") setCity(value);
  }

  function handleSubmit(e){
    e.preventDefault()
    onChangeCity(city)
  }

  return (
    <form className="header" onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
      <FontAwesomeIcon icon={faUser} />

    </form>
  );
}
