import "./App.css";
import { Component } from "react";
import { Modal } from "./components/Modal/Modal.jsx";

class App extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <button className="open-modal" onClick={this.openModal}>
          Open Modal
        </button>

        <Modal isOpen={this.state.isOpen} onClose={this.closeModal} />
      </div>
    );
  }
}

export default App;
