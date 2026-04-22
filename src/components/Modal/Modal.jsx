import { Component } from "react";
import "./modal.css";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyEscape);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      alert("Modal is open!");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyEscape);
  }

  handleKeyEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    if (!this.props.isOpen) return null;

    return (
      <div className="backdrop" onClick={this.handleBackdrop}>
        <div className="modal">
          <button className="close-btn" onClick={this.props.onClose}>
            X
          </button>
          <p className="text">Hello!</p>
        </div>
      </div>
    );
  }
}
