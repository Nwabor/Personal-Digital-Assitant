import "bulma/css/bulma.css";
import React from "react";
import Alexa from "./components/Alexa";
import Cortana from "./components/Cortana";
import Siri from "./components/Siri";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assitant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <Alexa
                title="alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was designed by amazom"
              />
            </div>

            <div className="column is-4">
              <Cortana
                title="cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="cortana was designed by microsoft"
              />
            </div>

            <div className="column is-4">
              <Siri
                title="siri"
                handle="@siri_1"
                image={SiriImage}
                description="Siri was designed by google"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
