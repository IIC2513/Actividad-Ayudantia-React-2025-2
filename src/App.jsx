import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Course from "./components/course/course";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [bgColor, setBgColor] = useState("#ffffffff");

  const addCourse = () => {
    const newCourse = {
      name: `Course ${courses.length + 1}`,
      section: `Section ${courses.length + 1}`,
      color: getRandomColor()
    };
    setCourses([...courses, newCourse]);
  };

  const deleteLastCourse = () => {
    setCourses(courses.slice(0, -1));
  };

  const getRandomColor = () => {
    const colors = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#f59e0b"];
    return colors[Math.floor(Math.random() * colors.length)];
  };


  useEffect(() => {
    let color;
    if (courses.length === 0) {
      color = "#ffffffff";
    } else if (courses.length <= 2) {
      color = "#16a34a";
    } else if (courses.length <= 4) {
      color = "#ffdd33";
    } else if (courses.length === 5) {
      color = "#ff8c00";
    } else {
      color = "#dc2626";
    }
    setBgColor(color);
  }, [courses]);

  return (
    <div className="app" style={{ background: bgColor, minHeight: "100vh" }}>
      <Navbar />

      <div className="content">
        <h2>Tablero</h2>

        <div className="courses-grid">
          {courses.length === 0 ? (
            
            <p>No hay cursos aún. ¡Crea uno! 🎓</p>
            
          ) : (
            courses.map((course, index) => (
              <Course
                key={index}
                name={course.name}
                section={course.section}
                color={course.color}
              />
            ))
            
          )}
        </div>
        <button onClick={addCourse}> Crear curso </button>
        <button onClick={deleteLastCourse} disabled={courses.length === 0}> Eliminar último curso </button>
      </div>
      
    </div>
  );
}
