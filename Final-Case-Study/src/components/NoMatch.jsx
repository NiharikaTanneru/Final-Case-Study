import { useNavigate } from "react-router";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="container text-center mt-2 bg-light">
          <img
            srcSet="./../Images/error.png"
            alt=""
            style={{ width: "50rem", height: "30rem", marginTop: "2rem" }}
          />
        </div>
        <button
          className="btn btn-secondary d-block m-auto mt-4"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NoMatch;
