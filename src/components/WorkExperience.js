import React from "react";
import Carousel from "react-bootstrap/Carousel";

const WorkExperience = () => {
  const slides = [
    {
      title: "Lähihoitaja",
      content: "Helsingin kaupungin päiväkodit",
      date: "2003-2004",
    },
    {
      title: "Sairaanhoitaja",
      content: "Naistenklinikka, Leikkausosasto",
      date: "2009-2010",
    },
    {
      title: "Sairaanhoitaja",
      content: "Kätilöopiston sairaala, Leikkausosasto",
      date: "2010-2011",
    },
    {
      title: "Sairaanhoitaja",
      content: "Hyvinkään sairaala, Leikkausosasto",
      date: "2014-2023",
    },
    {
      title: "Junior Software Developer",
      content: "Digia ",
      date: "2023-",
    },
  ];
  return (
    <div className="work-experience container mt-5">
      <h2
        className="mb-4"
        style={{
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Work Experience
      </h2>

      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundColor: "rgba(255, 244, 85, 0.6)",
              color: "black",
              padding: "100px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "black" }}>{slide.title}</h2>
            <p>{slide.content}</p>
            <p>{slide.date}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkExperience;
