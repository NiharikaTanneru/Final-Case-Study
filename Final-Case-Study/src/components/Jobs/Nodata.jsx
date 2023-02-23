const Nodata = (props) => {
  return (
    <div className="d-flex justify-content-center m-5">
      <h1 className=" text-center text-danger rounded text-uppercase border border-2 bg-warning p-5 ">
        {props.text}
      </h1>
    </div>
  )
}

export default Nodata;
