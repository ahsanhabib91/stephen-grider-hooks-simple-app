import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    // console.log(prevProps, this.props);
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
    }
  }
  render() {
    // console.log(this.props);
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
