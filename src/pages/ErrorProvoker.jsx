import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const badComponent = () => {
  throw new Error("Component failed to render");
};

const ErrorProvoker = () => {
  const { setErrorMessage } = useOutletContext();
  const [showBadComponent, setShowBadComponent] = useState(false);
  const handleClick = () => {
    try {
      throw new Error("This is a JavaScript error!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleHttpError = async () => {
    const response = fetch("https://jsonplaceholder.typicode.com/404");
    if (!response.ok) {
      try {
        throw new Error("HTTP error, status = " + response.status);
      } catch (error) {
        setErrorMessage(error.message);
      }
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <>
      <button onClick={handleClick}> Provoke JS ERROR</button>
      <button onClick={handleHttpError}> Provoke HTTP ERROR</button>
        <button onClick={() => setShowBadComponent(!showBadComponent)}>Provoke render error</button>
        {showBadComponent && badComponent()}
    </>
  );
};

export default ErrorProvoker;
