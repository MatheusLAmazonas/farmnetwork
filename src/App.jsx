import { Fragment } from "react";
import Component from "./component";
import './main.css';


export default function App() {
  return (
    <Fragment>
          <div id="escrita">
      <Component info="Bem-vindo ao Farm Network" />
          </div>

      <div className="container">

        <div className="farm-box">
          <div className="box">
            <img className="farm" src="/assets/farm-building-vector-icon-26.png" alt="Farm" />
          </div>
          <div className="status green"></div>
        </div>

        <div className="farm-box">
          <div className="box">
            <img className="farm" src="/assets/farm-building-vector-icon-26.png" alt="Farm" />
          </div>
          <div className="status green"></div>
        </div>

        <div className="farm-box">
          <div className="box">
            <img className="farm" src="/assets/farm-building-vector-icon-26.png" alt="Farm" />
          </div>
          <div className="status green"></div>
        </div>

      </div>

      <button className="btn">Solicitar Chamado</button>
    </Fragment>
  );
}