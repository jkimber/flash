import React from 'react';
import { Card } from './Card'
import { getData } from './data'
import './App.css';

function App() {
  const data = getData();

  const [item, setItem] = React.useState(data[0])
  const [toggle, setToggle] = React.useState(false)
  const [binomialFirst, setBinomialFirst] = React.useState(false)

  const getNext = () => {
    setToggle(!binomialFirst)
    setItem(data[Math.floor((Math.random() * data.length))]);
  }

  return (
    <div className="App">
      <main className="Main">
        <Card
          binomial={item[0]}
          common={item[1]}
          toggle={toggle}
          onClick={() => setToggle(!toggle)} />
      </main>
      <footer>
        <div className='Toolbar'>
          <label htmlFor="binomial">Binomial first
            <input
              type="radio"
              name="direction"
              value="binomial"
              id="binomial"
              checked={binomialFirst}
              onChange={() => setBinomialFirst(true)} />
          </label>
          <label htmlFor="common">Common first
            <input
              type="radio"
              name="direction"
              value="Common"
              id="common"
              checked={!binomialFirst}
              onChange={() => setBinomialFirst(false)} />
          </label>
        </div>
        <input
          type="button"
          className="App-button"
          onClick={getNext}
          value="Next" />
      </footer>
    </div>
  );
}

export default App;
