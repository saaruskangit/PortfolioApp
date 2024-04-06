import React from "react";
import catImage from "../assets/images/felix.jpg";
import "./PersonalInfo.css"; // Tuodaan CSS-tiedosto

const PersonalInfo = () => {
  return (
    <div className="personal-info container mt-5">
      <div className="card mb-3 shadow personal-card">
        <div className="row no-gutters align-items-center">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="rotate-container">
              <img
                src={catImage}
                alt="Kassi kissa"
                className="img-fluid rounded-start rotating-image"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Personal Information</h2>
              <p className="card-text">
                <strong>Name:</strong> Saara Rinne
              </p>
              <p className="card-text">
                <strong>Email:</strong> saara19115@student.hamk.fi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
