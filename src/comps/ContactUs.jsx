

const ContactUs = () => {
  return (
    <section className="contact-us" id="Contact">
      <div className="trainers">
        <h2>CONTACT US</h2>
        <p className="orangeline"></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi non nemo. <br />
          Maiores nisi non nemo.
        </p>
      </div>

      <div className="input-map">
        <div className="input">
          <div className="tel-email">
            <div className="mobile-number">
              <h2>Mobile Number</h2>
              <p>+90 585 89 56</p>
            </div>

            <div className="email">
              <h2>Email Address</h2>
              <p>sportgym@gmail.com</p>
            </div>
          </div>

          <form action="" className="contact">
            <div>
              <h2>Make an Appointment</h2>
            </div>
            <input type="text" placeholder="Your Name" className="contact-inputs" required />
            <input type="email" placeholder="Your Email" className="contact-inputs" required />
            <textarea name="message" placeholder="Your Message" className="contact-input" required></textarea>
          </form>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96242.9500429386!2d28.88171502386779!3d41.077906101501625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab739c5294e23%3A0x8d6290325dc7f978!2sMapofx!5e0!3m2!1str!2str!4v1722698299375!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
