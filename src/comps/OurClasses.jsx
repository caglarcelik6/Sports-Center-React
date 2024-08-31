import React, { useState } from 'react';

const OurClassesSection = () => {
  const [selectedClass, setSelectedClass] = useState('yoga');

  const contentData = {
    yoga: (
      <div className="yoga-content">
        <div>
          <h2>What is yoga?</h2>
          <p>
            Sto nulla necessitatibus voluptates et similique. Magnam ipsum expedita voluptatum
            esse sunt culpa sint assumenda. Aliquid in dicta molestias inventore dolor
            molestiae, accusamus incidunt repudiandae esse, officia quasi sapiente. Et
            voluptates deserunt voluptatum iure itaque ipsa?
          </p>
        </div>
        <div>
          <h2>When is your yoga time?</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="image1">
          <img
            src="Resimler/yoga.jpg"
            height="200px"
            width="300px"
            alt="A person performing a yoga pose"
          />
        </div>
      </div>
    ),
    group: (
      <div className="yoga-content">
        <div>
          <h2>What is Group?</h2>
          <p>
            Sto nulla necessitatibus voluptates et similique. Magnam ipsum expedita voluptatum
            esse sunt culpa sint assumenda. Aliquid in dicta molestias inventore dolor
            molestiae, accusamus incidunt repudiandae esse, officia quasi sapiente. Et
            voluptates deserunt voluptatum iure itaque ipsa?
          </p>
        </div>
        <div>
          <h2>When is your group class time?</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="image1">
          <img
            src="Resimler/group.webp"
            height="200px"
            width="300px"
            alt="Group class image"
          />
        </div>
      </div>
    ),
    solo: (
      <div className="yoga-content">
        <div>
          <h2>What is Solo?</h2>
          <p>
            Sto nulla necessitatibus voluptates et similique. Magnam ipsum expedita voluptatum
            esse sunt culpa sint assumenda. Aliquid in dicta molestias inventore dolor
            molestiae, accusamus incidunt repudiandae esse, officia quasi sapiente. Et
            voluptates deserunt voluptatum iure itaque ipsa?
          </p>
        </div>
        <div>
          <h2>When is your solo class time?</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="image1">
          <img
            src="Resimler/solo.jpg"
            height="200px"
            width="300px"
            alt="Solo class image"
          />
        </div>
      </div>
    ),
    stretching: (
      <div className="yoga-content">
        <div>
          <h2>What is Stretching?</h2>
          <p>
            Sto nulla necessitatibus voluptates et similique. Magnam ipsum expedita voluptatum
            esse sunt culpa sint assumenda. Aliquid in dicta molestias inventore dolor
            molestiae, accusamus incidunt repudiandae esse, officia quasi sapiente. Et
            voluptates deserunt voluptatum iure itaque ipsa?
          </p>
        </div>
        <div>
          <h2>When is your stretching class time?</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="image1">
          <img
            src="Resimler/stret.webp"
            height="200px"
            width="300px"
            alt="Stretching class image"
          />
        </div>
      </div>
    ),
  };

  const handleLinkClick = (event, className) => {
    event.preventDefault();
    setSelectedClass(className);
  };

  return (
    <section className="ourclasses-section" id="Classes">
      <div className="clippath"></div>
      <div className="content">
        <div className="section-header">
          <h2>OUR CLASSES</h2>
          <p className="orangeline"></p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            <br /> quod dipisicing elit. Sapiente, quod?
          </p>
        </div>

        <div className="links">
          <a className="a2" href="#" onClick={(e) => handleLinkClick(e, 'yoga')}>
            Yoga <div className="btn-clip"></div>
          </a>
          <a className="a2" href="#" onClick={(e) => handleLinkClick(e, 'group')}>
            Group <div className="btn-clip"></div>
          </a>
          <a className="a2" href="#" onClick={(e) => handleLinkClick(e, 'solo')}>
            Solo <div className="btn-clip"></div>
          </a>
          <a className="a2" href="#" onClick={(e) => handleLinkClick(e, 'stretching')}>
            Stretching <div className="btn-clip"></div>
          </a>
        </div>

        <div id="class-content">{contentData[selectedClass]}</div>
      </div>
    </section>
  );
};

export default OurClassesSection;
