import React from "react";
import felix1 from "../assets/images/felix1.jpeg";
import felix2 from "../assets/images/felix2.jpeg";
import felix3 from "../assets/images/felix3.png";

const EducationalBackground = () => {
  // Example educational background data
  const educations = [
    {
      id: 1,
      institution: "Laurea ammattikorkeakoulu",
      degree: "Sairaanhoitaja",
      year: "2008 - 2012",
      description: "Perus AMK",
      picture: felix2,
    },
    {
      id: 2,
      institution: "Koivukylän lukio",
      degree: "Ylioppilastutkinto",
      year: "1999 - 2003",
      description: "Lukio Koivukylän villissä vilskeessä",
      picture: felix3,
    },
    {
      id: 3,
      institution: "Varia ammattiopisto",
      degree: "Lähihoitaja",
      year: "1999 - 2003",
      description: "Ammattikoulu",
      picture: felix1,
    },
  ];

  return (
    <div className="educational-background container mt-5">
      <h2
        className="mb-4"
        style={{
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Educational Background
      </h2>
      <div className="row">
        {educations.map((education) => (
          <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
            <div className="card h-100 shadow">
              <div
                className="card-header"
                style={{ backgroundColor: "rgba(226, 199, 153, 0.5)" }}
              >
                <h5 className="card-title mb-0">{education.institution}</h5>
              </div>
              <div className="card-body d-flex justify-content-center">
                <img
                  src={education.picture}
                  className="card-img-top img-thumbnail"
                  alt={education.institution}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {education.degree}
                </h6>
                <p className="card-text">{education.description}</p>
              </div>
              <div
                className="card-footer text-muted"
                style={{ backgroundColor: "rgba(226, 199, 153, 0.5)" }}
              >
                <small>{education.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalBackground;
