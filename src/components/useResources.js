import { useState, useEffect } from "react";
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

export default useResources;
