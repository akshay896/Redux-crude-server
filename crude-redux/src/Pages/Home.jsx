import React from "react";
import DTable from "../components/DTable";
const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <h1 className="me-3">Details</h1>
        <button className="btn btn-primary">Add Details</button>
      </div>
      <div className="text-center mt-3">
        <DTable />
      </div>
    </>
  );
};

export default Home;
