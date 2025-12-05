import Spinner from "react-bootstrap/Spinner";
import "../sass/layout/Loading.scss";

function LoadingPinner() {
  return (
    <div className="loading">
      <Spinner animation="border" color="light" />
      <div className="text">Loading...</div>
    </div>
  );
}

export default LoadingPinner;
