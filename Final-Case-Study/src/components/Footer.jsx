function Footer() {
  return (
    <div className="footer">
      <footer className="text-center text-lg-start p-0 bg-dark ">
        <div className="container d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg  mx-2">
            <i className="fa fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-danger btn-lg mx-2">
            <i className="fa fa-youtube"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg  mx-2 insta">
            <i className="fa fa-linkedin"></i>
          </button>
          <button type="button" className="btn btn-light btn-lg  mx-2">
            <i className="fa fa-twitter" style={{ color: "#1DA1F2" }}></i>
          </button>
        </div>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: &nbsp; &nbsp;
          <b className="text-white">TopJobs.com</b>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
