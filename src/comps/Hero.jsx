import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" id="Home">
      {/* Header Area */}
      <header className="header">
        <div className="logo">
          <img src="Resimler/logo.png" alt="Logo" />
        </div>

        <div className="menu">
          <input type="checkbox" className="menu-btn" id="check" />
          <div className="hamburger"></div>

          {/* <label for="menu-btn" class="fa-solid fa-bars"></label> */}

          <div className="navbar" id="Home">
            <a href="#Home">Home</a>
            <a href="#Classes">Classes</a>
            <a href="#Trainer">Trainer</a>
            <a href="#Review">Review</a>
            <a href="#Contact">Contact</a>
            <button className="button">JOIN US</button>
          </div>
        </div>
      </header>

      <div className="article">
        <div className="article-e">
          <h2>POWERFULL</h2>
          <h1>
            Group <br /> Practise <br /> With Trainer
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas
            doloribus culpa dignissimos laboriosam enim ratione odio, molestias porro maxime
            esse officia fugiat cum magnam, optio ab necessitatibus quam tempore.
          </p>
          <div className="btns">
            <button className="btn1">Sign Up</button>
            <button className="btn2">Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
