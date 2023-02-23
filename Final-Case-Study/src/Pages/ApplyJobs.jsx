import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SuccessMessage from "../components/SuccessMessage";

const ApplyJobs = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const url = "http://localhost:4000/applications";

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is Mandatory")
      .matches(
        /^[a-zA-Z]+$/i,
        "Please don't give spaces,characters and numbers"
      ),
    email: yup.string().required("Email is required"),
    phone: yup
      .string()
      .required("Please Enter mobile Number")
      .matches(/^\d{10}$/, "Enter a valid 10 digit mobile number"),
    experience: yup
      .string()
      .required("Experience should be entered")
      .min(10)
      .max(150),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const output = async (data) => {
    try {
      let savedData = await axios.post(url, { ...data, id });

      console.log(savedData.data);
    } catch (err) {
      console.log(err.response.data);
    }

    reset();
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
      navigate("/jobs");
    }, 5000);
  };

  return (
    <>
      <div className="container my-5 col-md-6 bg-info border border-2 p-5 rounded">
        <h1 className="text-secondary text-center border border-2 bg-light p-2">
          <span>
            <i className="fa fa-user-circle-o me-2"></i>
          </span>
          JOB APPLICATION
        </h1>

        {status ? <SuccessMessage /> : null}
        <form
          className="border border-2 p-5 rounded bg-light"
          onSubmit={handleSubmit(output)}
        >
          <label className="form-control disable text-center fs-4 bg-info text-white">
            JOB ID:{id}
          </label>
          <br />
          <input
            type="text"
            className="form-control  mb-5"
            id="Name"
            placeholder="Name"
            {...register("name")}
          />
          <p className="text-danger">{errors.name?.message}</p>

          <input
            type="email"
            className="form-control  mb-5"
            id="inputEmail"
            placeholder="Email"
            {...register("email")}
          />
          <p className="text-danger">{errors.email?.message}</p>

          <input
            type="tel"
            className="form-control  mb-5"
            id="phone"
            placeholder="Enter Mobile Number"
            {...register("phone")}
          />
          <p className="text-danger">{errors.phone?.message}</p>
          <input
            type="text"
            className="form-control  mb-5"
            id="Address"
            placeholder="Address"
            {...register("address")}
          />

          <input
            type="text"
            className="form-control  mb-5"
            id="Exp"
            placeholder="Experience"
            {...register("experience")}
          />
          <p className="text-danger">{errors.experience?.message}</p>
          <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-secondary">
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyJobs;
