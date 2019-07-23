import React, { Component } from "react";
/* global google */

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend" />
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              placeholder="Search city"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </form>
      </div>
    );
  }
}
