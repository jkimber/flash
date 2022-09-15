import React from 'react';
import './App.css';
import { Card } from './Card'
import { data } from './data'

function App() {

  const [item, setItem] = React.useState(data[0])
  const [toggle, setToggle] = React.useState(0)

  const [binomialFirst, setBinomialFirst] = React.useState(true)

  const getNext = () => {
    setToggle(binomialFirst ? 0 : 2);
    setItem(data[Math.floor((Math.random() * data.length))]);
  }

  const flip = () => {
    setToggle(binomialFirst ? toggle === 2 ? 0 : toggle + 1 : toggle === 0 ? 2 : toggle - 1);
  }

  return (
    <div className="App">
      <main className="Main">
        <Card
          binomial={item[0]}
          common={item[1]}
          binomialFirst={binomialFirst}
          toggle={toggle}
          flip={flip} />
        <button className="App-button" onClick={getNext}>Next</button>
        <div className='Toolbar'>
          <label htmlFor="binomial">Binomial first
            <input type="radio" name="direction" value="binomial" id="binomial" checked={binomialFirst} onChange={() => setBinomialFirst(true)} />
          </label>
          <label htmlFor="common">Common first
            <input type="radio" name="direction" value="Common" id="common" checked={!binomialFirst} onChange={() => setBinomialFirst(false)} />
          </label>
        </div>
      </main>
      <footer className="Footer" onClick={flip} >
        reveal
      </footer>
    </div>
  );
}

export default App;
