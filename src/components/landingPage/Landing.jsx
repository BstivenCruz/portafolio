import "./landing.css";

export default function Landing() {
  return (
    <div className="container">
      <div className="nav">
        <img />
        <nav>
          <a>Learner</a>
          <a>Partner With Us</a>
          <a>About Us</a>
          <a>Contact Us</a>
          <button className="boton">Register now</button>
        </nav>
      </div>
      <div className="grupo6">
        <div className="hijo1">
          <p></p>
          <h1>
           Brandon Stiven <br />
            Segura Cruz
          </h1>
          <h2>@stivencruz0</h2>
          <button className="boton">About me</button>
        </div>
        <div className="hijo2">
          <div className="azul"></div>
          <div className="naranja"></div>
          
          <div className="img"></div>
        </div>
      </div>
      <h1 className="title">
        Driverbay Features For <br /> Your <span>Best Experience</span>
      </h1>
      <div className="grupo7">
        <div className="hijo3">
          <h2>Get verified driving schools and instructors near you</h2>
          <p>
            Find the best driving schools and instructors in the city to teach
            you in the best possible ways.
          </p>
          <button className="boton">Register now</button>
        </div>
        <div className="hijo2">
          <div className="azul"></div>
          <div className="naranja"></div>
          <div className="img"></div>
        </div>
      </div>
      <div className="grupo7 tres">
        <div className="hijo3">
          <h2>Easy enrollment into programs</h2>
          <p>
          Few simple clicks bring you closer to a lifetime of amazing long drives and memories
          </p>
          <button className="boton">Register now</button>
        </div>
        <div className="hijo2">
          <div className="azul"></div>
          <div className="naranja"></div>
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
}
