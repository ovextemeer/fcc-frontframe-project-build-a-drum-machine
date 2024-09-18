import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
    };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  playAudio(event) {
    event.target.firstElementChild.play();
    this.display(event.target.firstElementChild.id.toLowerCase());
  }

  handleKeyDown(event) {
    const e = document.getElementById(event.key.toUpperCase());

    if (e != null) {
      e.play();
      e.parentElement.style.backgroundColor = "orange";
      this.display(event.key);
    }
  }

  handleKeyUp(event) {
    const e = document.getElementById(event.key.toUpperCase());

    if (e != null) {
      e.parentElement.style.backgroundColor = "grey";
    }
  }

  display(key) {
    const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    const names = [
      "Heater 1",
      "Heater 2",
      "Heater 3",
      "Heater 4",
      "Clap",
      "Open-HH",
      "Kick-n'-Hat",
      "Kick",
      "Closed-HH",
    ];

    this.setState({ display: names[keys.indexOf(key)] });
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="TitleBar">
          <em>
            <span className="Title">FCC</span>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </em>
        </div>
        <div className="Controls">
          <div className="Keys">
            <div className="drum-pad" id="heater-1" onClick={this.playAudio}>
              <audio className="clip" id="Q">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                  type="audio/mp3"
                />
              </audio>
              Q
            </div>
            <div className="drum-pad" id="heater-2" onClick={this.playAudio}>
              <audio className="clip" id="W">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                  type="audio/mp3"
                />
              </audio>
              W
            </div>
            <div className="drum-pad" id="heater-3" onClick={this.playAudio}>
              <audio className="clip" id="E">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
                  type="audio/mp3"
                />
              </audio>
              E
            </div>
            <div className="drum-pad" id="heater-4" onClick={this.playAudio}>
              <audio className="clip" id="A">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                  type="audio/mp3"
                />
              </audio>
              A
            </div>
            <div className="drum-pad" id="clap" onClick={this.playAudio}>
              <audio className="clip" id="S">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                  type="audio/mp3"
                />
              </audio>
              S
            </div>
            <div className="drum-pad" id="open-hh" onClick={this.playAudio}>
              <audio className="clip" id="D">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                  type="audio/mp3"
                />
              </audio>
              D
            </div>
            <div className="drum-pad" id="kick-n-hat" onClick={this.playAudio}>
              <audio className="clip" id="Z">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                  type="audio/mp3"
                />
              </audio>
              Z
            </div>
            <div className="drum-pad" id="kick" onClick={this.playAudio}>
              <audio className="clip" id="X">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                  type="audio/mp3"
                />
              </audio>
              X
            </div>
            <div className="drum-pad" id="closed-hh" onClick={this.playAudio}>
              <audio className="clip" id="C">
                <source
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                  type="audio/mp3"
                />
              </audio>
              C
            </div>
          </div>
          <div className="Adjuster">
            <div id="display">{this.state.display}</div>
          </div>
        </div>
      </div>
    );
  }
}
