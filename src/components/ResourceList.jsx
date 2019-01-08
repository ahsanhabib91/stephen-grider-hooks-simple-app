import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    console.log("componentDidMount 1", this.props);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
    console.log("componentDidMount 2", this.props);
  }

  async componentDidUpdate(prevProps) {
    console.log("componentDidUpdate 1", this.props);
    // console.log(prevProps, this.props);
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
      console.log("componentDidUpdate 3", this.props);
    }
    console.log("componentDidUpdate 2", this.props);
  }
  render() {
    console.log("render", this.props);
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
