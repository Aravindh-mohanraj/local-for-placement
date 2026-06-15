import "./CourseCard.css";

function CourseCard() {
  return (
    <div className="container">
      <div className="card">
        <h3>Cloud Computing</h3>
        <p>Instructor: Arun Kumar</p>
        <p>Duration: 8 Weeks</p>
        <p>Rating: 4.5</p>
        <p>Fee: 3500</p>
      </div>

      <div className="card">
        <h3>Data Structures and Algorithms</h3>
        <p>Instructor: Priya Sharma</p>
        <p>Duration: 10 Weeks</p>
        <p>Rating: 4.7</p>
        <p>Fee: 4000</p>
      </div>

      <div className="card">
        <h3>Java Programming</h3>
        <p>Instructor: Ravi Kumar</p>
        <p>Duration: 6 Weeks</p>
        <p>Rating: 4.4</p>
        <p>Fee: 3000</p>
      </div>

      <div className="card">
        <h3>MERN Stack Development</h3>
        <p>Instructor: John David</p>
        <p>Duration: 12 Weeks</p>
        <p>Rating: 4.8</p>
        <p>Fee: 5000</p>
      </div>

      <div className="card">
        <h3>DevOps</h3>
        <p>Instructor: Karthik Raj</p>
        <p>Duration: 9 Weeks</p>
        <p>Rating: 4.6</p>
        <p>Fee: 4500</p>
      </div>
    </div>
  );
}

export default CourseCard;