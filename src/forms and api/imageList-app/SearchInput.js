import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFromSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFromSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
                type="text"
                placeholder="Ara..."
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;

//Arrow fun ile yaparsan (this işlemini) bind işlemine direkt bağlar.
