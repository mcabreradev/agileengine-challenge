import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./ControlPanel";
import FileZone from "./FileZone";
import { getMockText } from "../utils/text.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: []
    };
  }

  componentDidMount() {
    this.getText();
  }

  async getText() {
    let text = await getMockText();
    this.setState({text});
  }

  reloadText = (text) =>{
    this.setState({text});
  }

  render() {
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel reloadText={this.reloadText} />
          <FileZone text={this.state.text} />
        </main>
      </div>
    );
  }
}

export default App;
