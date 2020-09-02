import React, { Component } from "react";
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gifList";

const giphy = require('giphy-api')('KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR');

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "XAxT6atAkwYvD2vQtJ",
      gifList: [
        "XAxT6atAkwYvD2vQtJ",
        "eNAeRxIMDIl7rYZaHb",
        "JOe7JxOiMg61ogl6fH",
      ],
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedGif: newId,
    });
  };

  changeGifList = (keyword) => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        this.setState({ gifList: res.data.map(gif => gif.id) });
      }
    );
  };

  render() {
    const { selectedGif, gifList } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={gifList} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
