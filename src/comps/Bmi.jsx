import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [arrowPosition, setArrowPosition] = useState(0);

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
      return;
    }

    const calculatedBMI = weightValue / ((heightValue / 100) ** 2);
    setBmi(calculatedBMI.toFixed(2));

    let position = 0;
    if (calculatedBMI < 18.5) {
      position = 50;
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      position = 150;
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      position = 250;
    } else {
      position = 350;
    }

    setArrowPosition(position);
  };

  return (
    <section className="bmi-section">
      <div className="bmi">
        <h2>BMI Calculator</h2>
        <p>Lorem ipsum dolor sit amet cometdolor Praesentium arum sunt, eveniet consectetur voluptatibus numquam!</p>
        <p>Lorem ipsum, dolor , lacienduodsuscipit nequas autem expedita dolor illum molestias omnis temporibus inventore!</p>
        <div className="input-bmi">
          <input
            type="number"
            id="height"
            placeholder="Your height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              calculateBMI();
            }}
          />
          <p>cm</p>
          <input
            type="number"
            id="weight"
            placeholder="Your weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              calculateBMI();
            }}
          />
          <p>kg</p>
        </div>
      </div>

      <div className="bmi-image">
        <h2>Your BMI</h2>
        {bmi && <p>{bmi}</p>}
        <img src="Resimler/bmi-index.jpg" height="200px" width="400px" alt="BMI Index" />
        <div
          className="arrow"
          style={{ transform: `translateX(${arrowPosition}px)` }}
        ></div>
      </div>
    </section>
  );
};

export default BMICalculator;
