import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />

      <div className="other">
        <section className="hero-section">
          <h1>Welcome to Vivekanand College!</h1>
          <p>Your journey to excellence starts here.</p>
          <Link to="/admissionspage" className="btn btn-success">
            Apply Now!
          </Link>
        </section>

        <article className="info">
          <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
          <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        </article>

        <article className="text">
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li>Legacy of Excellence: Decades of commitment to quality education.</li>
            <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
            <li>Modern Facilities: Well‑equipped labs, expansive library, and comfortable campus.</li>
            <li>Holistic Development: Focus on co‑curricular activities, sports, and community service.</li>
            <li>Strong Placements: Excellent career opportunities with leading companies.</li>
          </ul>
        </article>

        <figure className="image">
          <figcaption>Campus Life & Facilities</figcaption>
          <section className="img">
            <img src="/images/students-studying-DbLGuwF_.jpeg" alt="Students Studying" />
            <img src="/images/campus-life-Crkero7B.jpg" id="img2" alt="Campus Life" />
          </section>
        </figure>

        <section className="bottom">
          <h4>Ready to explore our courses?</h4>
          <Link to="/coursespage" className="btn btn-success">
            Explore Courses
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
