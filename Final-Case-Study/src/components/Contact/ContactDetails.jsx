import { useEffect, useState } from "react";
import axios from "axios";

const ContactDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/contactData")
      .then((response) => setData(response.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <div className="row d-flex justify-content-center p-5 m-5 rounded border border-2 bg-info">
        <div className="card border-info m-3 " style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="badge p-2 bg-primary text-uppercase rounded-pill">
              Address
            </h5>
            <p className="card-text">{data.address}</p>
          </div>
        </div>
        <div className="card border-info m-3 " style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="badge p-2 bg-primary text-uppercase rounded-pill">
              Phone
            </h5>
            <p className="card-text">{data.phone}</p>
            <p className="card-text">{data.phone1}</p>
          </div>
        </div>
        <div className="card border-info m-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="badge p-2 bg-primary text-uppercase rounded-pill">
              Email
            </h5>
            <p className="card-text">{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
