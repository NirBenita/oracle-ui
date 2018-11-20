import React from "react";
import ReactDOM from "react-dom";
import { Button, Label, Input, Header } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";
import CreatableSelect from "react-select/lib/Creatable";

import "./styles.css";

const words = [
  "Can",
  "He",
  "A",
  "Ask",
  "Angel",
  "Big",
  "Could",
  "I",
  "An",
  "Be",
  "Art",
  "Best",
  "Do",
  "It",
  "Behind",
  "Blow",
  "Ass",
  "Bright",
  "Does",
  "Me",
  "Far",
  "Burn",
  "Bed",
  "Clear",
  "How",
  "My",
  "In",
  "Come",
  "Body",
  "Close",
  "Should",
  "Our",
  "Is",
  "Change",
  "Drugs",
  "Cold",
  "What",
  "She",
  "It",
  "Dance",
  "End",
  "Dark",
  "When",
  "The",
  "Near",
  "Do",
  "Eye",
  "Early",
  "Where",
  "Them",
  "Of",
  "Drop",
  "Face",
  "Easy",
  "Who",
  "They",
  "On",
  "Eat",
  "Friend",
  "Empty",
  "Why",
  "Us",
  "Out",
  "Fall",
  "Game",
  "Entire",
  "Will",
  "We",
  "The",
  "Feel",
  "Girl",
  "False",
  "Would",
  "You",
  "To",
  "Find",
  "God",
  "Fine",
  "Your",
  "Under",
  "Fuck",
  "Guy",
  "Free",
  "This",
  "With",
  "Get",
  "Hand",
  "Full",
  "Here",
  "Give",
  "Happiness",
  "Good",
  "Go",
  "Head",
  "Great",
  "Grow",
  "Heart",
  "Happy"
];

// Rank answer 1-5 and store that answer to a DB

const createOption = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
});
const defaultOptions = words.map(word => createOption(word));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);

    this.state = {
      options: defaultOptions,
      value: [],
      isLoading: false,
      answer: "no answer for you, come back one year",
      modalVisible: true
    };
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
  // Send answer to server
  handleSubmit() {
    let question = "";
    this.state.value.map(word => {
      question = `${(question, word.value)}`;
    });
    const url =
      "https://0zblxdjtm3.execute-api.eu-central-1.amazonaws.com/production/ask_question";
    const params = {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      questions_to_ask: "whaaaaat?"
    };
    fetch(url, params)
      .then(response => response)
      .then(data => {
        console.log(data);
      });
    console.log(question);

    // TODO: Get answer from server and update state

    // let msg = new SpeechSynthesisUtterance(this.state.answer);
    // window.speechSynthesis.speak(msg);
    this.setState({ value: [] });
  }
  handleAnswer() {}
  render() {
    const { value, options, isLoading, modalVisible } = this.state;
    const settings = {
      start: 5,
      min: 0,
      max: 10,
      step: 1
    };
    let modal = undefined;
    debugger
    if (modalVisible) {
      modal = (
        <div
          className="modal"
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            background: "#fff",
            padding: "48px"
          }}
        >
          <div
            style={{
              margin: "0 auto",
              maxWidth: "900px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Header dividing>How relevant was it to the question?</Header>
            <div style={{ display: "flex", width: "100%", padding: "24px 0" }}>
              <Label style={{ flex: 1 }}>Nothing to do with it</Label>
              <div style={{ flex: 2 }}>
                <Slider color="red" inverted={false} settings={settings} />
              </div>
              <Label style={{ flex: 1 }}>Spot on</Label>
            </div>
          </div>
          <Header dividing>How good was it?</Header>
          <div style={{ display: "flex", width: "100%", padding: "24px 0" }}>
            <Label style={{ flex: 1 }}>Lame!</Label>
            <div style={{ flex: 2 }}>
              <Slider color="red" inverted={false} settings={settings} />
            </div>
            <Label style={{ flex: 1 }}>Super funny and clever</Label>
          </div>
          <Header dividing>Could you offer a funnier question?</Header>
          <Input type="text" placeholder="Funnier question" />
          <Button onClick={this.handleAnswer} primary content="submit" />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to the Oracle</h1>
        <h2>
          Compose a sentance using the words below, or by writing down words
          which aren't on the list
        </h2>
        <CreatableSelect
          isMulti
          isDisabled={isLoading}
          isLoading={isLoading}
          onCreateOption={this.handleCreate}
          value={value}
          onChange={this.handleChange}
          options={options}
        />
        <Button onClick={this.handleSubmit} primary content="submit" />
        <div>
          {options.map((word, index) => (
            <Button
              style={{ margin: "8px" }}
              key={index}
              onClick={() =>
                this.pickWord({ value: word.value, label: word.label })
              }
            >
              {word.label}
            </Button>
          ))}
        </div>
        {modal}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
