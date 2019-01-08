import React from "react";
import useResources from "./useResources";

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
