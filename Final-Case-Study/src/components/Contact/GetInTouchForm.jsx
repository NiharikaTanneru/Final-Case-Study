import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { v4 as uuid } from "uuid";
import SuccessMessage from "../SuccessMessage";

const GetInTouchForm = () => {
  const [status, setStatus] = useState(false);

  const url = "http://localhost:4000/messages";
  const unique_id = uuid(); //unique id generator from uuid library
  const id = unique_id.slice(0, 8); //slicing the unique id to length of 8 characters.

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .matches(
        /^[a-zA-Z]+$/i,
        "Special Characters are not allowed"
      ),
    email: yup.string().required("Email is required"),
    phone: yup
      .string()
      .required("Mobile Number is required")
      .matches(/^\d{10}$/, "Enter a valid 10 digit mobile number"),
    messagetext: yup.string().min(10).max(150),
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
    }, 3000);
  };

  return (
    <div>
      <div className="container p-5 rounded border border-2 mb-4" style={{backgroundColor:"lightblue"}}>
        <div className="row no-gutters">
        
          <div className="col-md-6 pt-5 d-flex">
            

            {status ? <SuccessMessage /> : null}

            <form className="container" onSubmit={handleSubmit(output)}>
            <h1 className="text-danger  text-center py-2 ">Get In Touch</h1>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  {...register("name")}
                />
              </div>
              <p className="text-danger fs-5">{errors.name?.message}</p>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="Name"
                  placeholder="Email"
                  {...register("email")}
                />
                <p className="text-danger m-1 fs-5">{errors.email?.message}</p>
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="Name"
                  placeholder="Phone"
                  {...register("phone")}
                />
                <p className="text-danger m-1 fs-5">{errors.phone?.message}</p>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="Textarea"
                  style={{ height: "100px", resize: "none" }}
                  {...register("messagetext")}
                ></textarea>
                <label htmlFor="Textarea">Message</label>
              </div>
              <p className="text-danger fs-5">{errors.messagetext?.message}</p>
              <div>
                <button className="btn btn-secondary btn-transform d-block m-auto mb-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <img srcSet="./../Images/contactus.png" alt="" className="w-100" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
