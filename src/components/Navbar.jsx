import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-wrap justify-content-center gap-4">
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                setSearch("nature");
                navigate("/");
              }}
            >
              Nature
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setSearch("travel");
                navigate("/");
              }}
            >
              Travel
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setSearch("city");
                navigate("/");
              }}
            >
              City
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setSearch("car");
                navigate("/");
              }}
            >
              Cars
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                setSearch("fashion");
                navigate("/");
              }}
            >
              Fashion
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => {
                setSearch("animals");
                navigate("/");
              }}
            >
              Animals
            </button>
            <button
              className="btn btn-outline-dark text-light"
              onClick={() => {
                setSearch("technology");
                navigate("/");
              }}
            >
              Technology
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                setSearch("finance");
                navigate("/");
              }}
            >
              Business & Finance
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setSearch("tokyo");
                navigate("/");
              }}
            >
              Tokyo
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setSearch("dubai");
                navigate("/");
              }}
            >
              Dubai
            </button>
            {location.pathname === "/saved" ? (
              <button className="btn btn-warning" onClick={() => navigate("/")}>
                Home
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() => navigate("/saved")}
              >
                Saved
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container my-4" style={{ maxWidth: "780px" }}>
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-dark text-light"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
