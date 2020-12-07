import React from 'react';
import './App.css';

const yeses = [
  "Yes",
  "Ya",
  "Yep",
  "Yup",
  "YAAAAAS",
  "Totally",
  "Totes",
  "Sure",
  "You bet",
  "OK",
  "Okay",
  "Okie dokie",
  "Alright",
  "Alrighty",
  "Sounds good",
  "For sure",
  "Sure thing",
  "Certainly",
  "Definitely",
  "Of course",
  "Gladly",
  "Indubitably",
  "Absolutely",
  "Indeed",
  "Undoubtedly",
  "Yeah, yeah, yeah",
  "Fine",
  "Affirmative",
  "Very well",
  "Obviously",
  "No",
  "Aye",
  "Forsooth",
  "Yea",
  "Verily",
  "Surely",
  "Mhmm",
  "Uh-huh",
  "👍",
  "oui",
  "ja",
];

const size = {
  1: '40vw',
  2: '40vw',
  3: '40vw',
  4: '35vw',
  5: '35vw',
  6: '30vw',
  7: '25vw',
  8: '20vw',
  9: '18vw',
  10: '16vw',
  11: '15vw',
  12: '13vw',
  13: '12vw',
  14: '10vw',
  15: '10vw',
  16: '10vw'
};

function App() {
  const theYes = yeses[Math.floor(Math.random()*yeses.length)];
  return (
    <div className="App">
      <div className="stuff"><a href="https://usacx.co">USACX.co</a> | <a href="https://knavewear.com">KNAVEWEAR</a></div>
      <div className="yes">
        <span className="yes-text" style={{fontSize: size[theYes.length]}}>{theYes}</span>
      </div>

    </div>
  );
}

export default App;
