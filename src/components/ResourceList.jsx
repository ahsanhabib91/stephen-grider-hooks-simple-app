import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  console.log("useResources called 1", resource);
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    console.log("useResources called 3");
    setResources(response.data);
    console.log("useResources called 4");
  };
  useEffect(
    () => {
      console.log("useEffect", resource);
      fetchResource(resource);
    },
    [resource]
  );
  console.log("useResources called 2", resource, resources);
  return resources;
};

const ResourceList = props => {
  console.log("render 1", props.resource);
  const resources = useResources(props.resource);
  console.log("render 2", props.resource, resources);
  return (
    <ul>
      {resources.map(data => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
