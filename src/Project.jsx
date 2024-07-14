import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

function Project({ name, url }) {
  const [isUp, setIsUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((response) => setIsUp(response.status === 200))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [url, setIsUp, setIsLoading]);

  return (
    <div className="flex gap-2 border-2 border-solid border-stone-800 bg-green-600 w-[50%] justify-center p-2 m-2">
      {name}
      <a href={url}>{url}</a>
      {isLoading ? "loading..." : isUp + ""}
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
