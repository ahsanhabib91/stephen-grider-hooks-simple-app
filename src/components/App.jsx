import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  /**
   * resource === this.state.resource
   * setResource === this.setState({ resource: value })
   * useState === state = {resource: value}
   */
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
