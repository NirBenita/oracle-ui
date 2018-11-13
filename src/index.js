import React from "react";
import ReactDOM from "react-dom";
import { Button, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CreatableSelect from "react-select/lib/Creatable";

import "./styles.css";

const defaultOptions = [
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
const createOption = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);

    this.state = { options: defaultOptions, value: [], isLoading: false };
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }

  pickWord(word) {
    const { value } = this.state;
    const newValue = [...value, word];
    this.setState({ value: newValue });
    console.log(value);
  }
  handleChange(newValue, actionMeta) {
    console.group("Value Changed");
    console.log("new value", newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  }
  handleCreate = inputValue => {
    this.setState({ isLoading: true });
    console.group("Option created");
    console.log("Wait a moment...");
    setTimeout(() => {
      const { options, value } = this.state;
      const newOption = createOption(inputValue);
      console.log(newOption);
      console.groupEnd();
      this.setState({
        isLoading: false,
        options: [...options, newOption],
        value: [...value, newOption]
      });
    }, 1000);
  };

  onSubmit() {
    console.log(this.state.value);
  }
  render() {
    const { value, options, isLoading } = this.state;
    return (
      <div className="App">
        <h1>Welcome to the Oracle</h1>
        <h2>Compose a sentance using the words below, or by writing down words which aren't on the list</h2>
        <CreatableSelect
          isMulti
          isDisabled={isLoading}
          isLoading={isLoading}
          onCreateOption={this.handleCreate}
          value={value}
          onChange={this.handleChange}
          options={options}
        />
                <Button onClick={this.onSubmit} primary content="submit" />

        <div>
          {options.map((word, key) => (
              <Button
              style={{margin:'8px'}}
                key={key}
                onClick={() =>
                  this.pickWord({ value: word.value, label: word.label })
                }
              >
                {word.value}
              </Button>
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
