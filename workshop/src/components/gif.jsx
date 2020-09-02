import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
    console.log("clicked");
  }

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} onKeyPress={this.handleKeyPress} role="presentation" />
    );
  }
}

export default Gif;
