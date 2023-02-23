const Contactbanner = (props) => {
  return (
    <div className="card bg-dark text-white border border-radius-0">
      <img
        src="./../Images/banner.png"
        className="opacity-50 img-banner "
        alt="Background"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container text-white ">
          <h5 className="card-title display-6 fw-bolder mb-2 p-5 border-bottom text-uppercase">
            {props.title}
          </h5>
          <p className="card-text lead fs-4">
            You Can Reach to us If any Queries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactbanner;
