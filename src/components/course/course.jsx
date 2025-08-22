import "./course.css";

export default function Course({ name, section, color }) {
  return (
    <div className="course-card" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <p>Section: {section}</p>
    </div>
  );
}
