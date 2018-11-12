import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import CreatableSelect from "react-select/lib/Creatable";

import "./styles.css";

const options = [
  { value: "Can", label: "Can" },
  { value: "He", label: "He" },
  { value: "A", label: "A" },
  { value: "Ask", label: "Ask" },
  { value: "Angel", label: "Angel" },
  { value: "Big", label: "Big" },
  { value: "Could", label: "Could" },
  { value: "I", label: "I" },
  { value: "An", label: "An" },
  { value: "Be", label: "Be" },
  { value: "Art", label: "Art" },
  { value: "Best", label: "Best" },
  { value: "Do", label: "Do" },
  { value: "It", label: "It" },
  { value: "Behind", label: "Behind" },
  { value: "Blow", label: "Blow" },
  { value: "Ass", label: "Ass" },
  { value: "Bright", label: "Bright" },
  { value: "Does", label: "Does" },
  { value: "Me", label: "Me" },
  { value: "Far", label: "Far" },
  { value: "Burn", label: "Burn" },
  { value: "Bed", label: "Bed" },
  { value: "Clear", label: "Clear" },
  { value: "How", label: "How" },
  { value: "My", label: "My" },
  { value: "In", label: "In" },
  { value: "Come", label: "Come" },
  { value: "Body", label: "Body" },
  { value: "Close", label: "Close" },
  { value: "Should", label: "Should" },
  { value: "Our", label: "Our" },
  { value: "Is", label: "Is" },
  { value: "Change", label: "Change" },
  { value: "Drugs", label: "Drugs" },
  { value: "Cold", label: "Cold" },
  { value: "What", label: "What" },
  { value: "She", label: "She" },
  { value: "It", label: "It" },
  { value: "Dance", label: "Dance" },
  { value: "End", label: "End" },
  { value: "Dark", label: "Dark" },
  { value: "When", label: "When" },
  { value: "The", label: "The" },
  { value: "Near", label: "Near" },
  { value: "Do", label: "Do" },
  { value: "Eye", label: "Eye" },
  { value: "Early", label: "Early" },
  { value: "Where", label: "Where" },
  { value: "Them", label: "Them" },
  { value: "Of", label: "Of" },
  { value: "Drop", label: "Drop" },
  { value: "Face", label: "Face" },
  { value: "Easy", label: "Easy" },
  { value: "Who", label: "Who" },
  { value: "They", label: "They" },
  { value: "On", label: "On" },
  { value: "Eat", label: "Eat" },
  { value: "Friend", label: "Friend" },
  { value: "Empty", label: "Empty" },
  { value: "Why", label: "Why" },
  { value: "Us", label: "Us" },
  { value: "Out", label: "Out" },
  { value: "Fall", label: "Fall" },
  { value: "Game", label: "Game" },
  { value: "Entire", label: "Entire" },
  { value: "Will", label: "Will" },
  { value: "We", label: "We" },
  { value: "The", label: "The" },
  { value: "Feel", label: "Feel" },
  { value: "Girl", label: "Girl" },
  { value: "False", label: "False" },
  { value: "Would", label: "Would" },
  { value: "You", label: "You" },
  { value: "To", label: "To" },
  { value: "Find", label: "Find" },
  { value: "God", label: "God" },
  { value: "Fine", label: "Fine" },
  { value: "Your", label: "Your" },
  { value: "Under", label: "Under" },
  { value: "Fuck", label: "Fuck" },
  { value: "Guy", label: "Guy" },
  { value: "Free", label: "Free" },
  { value: "This", label: "This " },
  { value: "With", label: "With" },
  { value: "Get", label: "Get" },
  { value: "Hand", label: "Hand" },
  { value: "Full", label: "Full" },
  { value: "Here", label: "Here" },
  { value: "Give", label: "Give" },
  { value: "Happiness", label: "Happiness" },
  { value: "Good", label: "Good" },
  { value: "Go", label: "Go" },
  { value: "Head", label: "Head" },
  { value: "Great", label: "Great" },
  { value: "Grow", label: "Grow" },
  { value: "Heart", label: "Heart" },
  { value: "Happy", label: "Happy" }
];

// Send answer to server

// Get answer from the server and update state

// Takes the answer and reads it through TTS

// Rank answer 1-5 and store that answer to a DB
export default class CreatableMulti extends React.Component {
  handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect isMulti onChange={this.handleChange} options={options} />
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [{ value: "Go", label: "Go" }] };
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }

  pickWord(word) {
    debugger;
    const newValue = [...this.state.value, word];
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Select
          isMulti
          options={options}
          value={this.state.value}
          onChange={this.vla}
        />
        <CreatableMulti
          options={options}
          value={this.state.value}
          onChange={this.vla}
        />

        {options.map((word, key) => (
          <button
            onClick={() =>
              this.pickWord({ value: word.value, label: word.label })
            }
          >
            {word.value}
          </button>
        ))}
      </div>
    );
  }

  vla = (value, action) => {
    this.setState({
      value: value
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
