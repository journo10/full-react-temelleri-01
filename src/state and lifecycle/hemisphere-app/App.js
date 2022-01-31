import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position)
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          {" "}
          <HemisphereDisplay latitude={this.state.latitude} />{" "}
        </div>
      );
    } else {
      return <div>Yükleniyor...</div>;
    }
  }
}
export default App;
