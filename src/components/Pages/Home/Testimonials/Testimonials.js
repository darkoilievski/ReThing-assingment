/* eslint-disable prettier/prettier */

import "./Testimonials.css";
import testimonials from "../../../../assets/testimonials.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <p className="testimonials-text">
        Test Text 2 Test Text 2 Test Text 2 Test Text 2 Test Text 2 Test Text 2 Test Text 2 Test
        Text 2 Test Text 2 Test Text 2{" "}
      </p>
      <img src={testimonials} alt="testimonials" className="testimonials-img" />
    </section>
  );
};

export default Testimonials;
