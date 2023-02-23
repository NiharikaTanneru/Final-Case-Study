import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Nodata from "../components/Jobs/Nodata";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true); //flag is set to false when there's no data from response.
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobLists")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e.message);
        setFlag(false);
        throw new Error();
      });
  }, []);
 
  return (
    <>
      {flag ? (
        <div className="bg-light m-0">
          <h1 className="container text-center text-uppercase text-secondary mt-2">
            <u>Job Openings</u>
          </h1>
          <div
            className="bg-info p-4 my-4 border border-4 rounded"
            style={{ width: "80%", display: "block", margin: "auto" }}
          >
            {data.map((item, i) => (
              <div
                className="card border border-5 m-4"
                key={i}
                style={{ boxShadow: "12px 5px 10px black", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/applyjob/${item.id}`);
                }}
              >
                <div className="card-body border border-2 m-3">
                  <h5 className="card-title">{item.desg}</h5>
                  <p>
                    JOB ID :
                    <span className="border border-2 rounded-pill bg-info text-white p-1">
                      {item.id}
                    </span>
                  </p>
                  <p className="card-text text-secondary">{item.company}</p>
                  <p className="card-text text-secondary">
                    <i className="fa fa-suitcase"></i>
                    <span className="ps-1 pe-5">{item.exp}</span>
                    <i className="fa fa-rupee"></i>
                    <span className="ps-1 pe-5">{item.salary}</span>
                    <i className="fa fa-map-marker"></i>
                    <span className="ps-1">{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Nodata text="No Data Found" />
      )}
    </>
  );
};

export default Jobs;
