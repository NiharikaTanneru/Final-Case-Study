import { useNavigate } from "react-router";

const HomeButtons = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="m-2 py-5 text-center bg-gradient bg-cyan display-2">
        <button
          type="button"
          className="btn btn-secondary btn-transform py-3"
          onClick={() => {
            navigate("/jobs");
          }}
        >
          Jobs
        </button>

        <button
          type="button"
          className="btn btn-secondary btn-transform mx-4 py-3"
          onClick={() => {
            navigate("/contact");
          }}
        >
          ContactUs
        </button>

        <button type="button" className="btn btn-secondary btn-transform py-3">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default HomeButtons;
