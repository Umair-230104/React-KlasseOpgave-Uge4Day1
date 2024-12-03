import { useOutletContext } from "react-router-dom";

const ErrorProvoker = () => {
  const { setErrorMessage } = useOutletContext();
  const handleClick = () => {
    try {
      throw new Error("This is a JavaScript error!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <button onClick={handleClick}> Provoke JS ERROR</button>
    </>
  );
};

export default ErrorProvoker;
