import React from 'react';
import '../style/Services.css'; // You can create a separate CSS file for Services page styles

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services Provided by Sudama Aushdhalya</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Visiting for Skin Treatment</h3>
          <p>
            We offer personalized skin treatments at our clinic to address
            various skin concerns. Our expert dermatologists will examine your
            skin and provide tailored solutions.
          </p>
        </div>
        <div className="service-card">
          <h3>Ordering Online</h3>
          <p>
            Can't visit our clinic in person? No worries! You can order
            skin-related products and medications online through our website.
          </p>
        </div>
        <div className="service-card">
          <h3>Video Consultation</h3>
          <p>
            Book a video call consultation with our experienced dermatologists
            to discuss your skin issues and get professional advice from the
            comfort of your home.
          </p>
        </div>
        <div className="service-card">
          <h3>Leucoderma (Vitiligo) Treatment</h3>
          <p>
            We offer effective Ayurvedic treatments for Leucoderma (Vitiligo),
            a skin disorder that causes loss of skin color in patches. Our
            experienced Ayurvedic practitioners use natural remedies to
            stimulate melanin production and restore skin color.
          </p>
        </div>
        <div className="service-card">
          <h3>Acne Treatment</h3>
          <p>
            Our Ayurvedic approach to acne treatment targets the root causes of
            acne and helps purify the blood and detoxify the body. We offer
            customized herbal formulations to treat acne and prevent future
            breakouts.
          </p>
        </div>
        <div className="service-card">
          <h3>Psoriasis Treatment</h3>
          <p>
            Psoriasis is a chronic skin condition that causes red, itchy, and
            scaly patches. Our Ayurvedic treatments aim to balance the
            doshas and promote skin healing. We provide personalized herbal
            remedies and lifestyle recommendations for managing psoriasis.
          </p>
        </div>
        <div className="service-card">
          <h3>25+ Years of Ayurvedic Experience</h3>
          <p>
            Sudama Aushdhalya boasts over 25 years of experience in Ayurvedic
            skin treatments. Our team of skilled Ayurvedic practitioners
            combines traditional wisdom with modern techniques to provide the
            best care for your skin concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
