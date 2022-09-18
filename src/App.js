import React from 'react';
import { Card } from './Card'
import { getData } from './data'
import './App.css';

function App() {
  const [data, setData] = React.useState(getData())

  const [item, setItem] = React.useState(data[0])
  const [toggle, setToggle] = React.useState(false)
  const [binomialFirst, setBinomialFirst] = React.useState(true)


  const getNext = () => {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    let next = data[randomInteger(0, data.length - 1)];
    while (next[0] === item[0] && data.length > 1) {
      next = data[randomInteger(0, data.length - 1)];
    }
    
    setToggle(!binomialFirst)
    setItem(next);
  }

  const supress = (supressed) => {
    setData(data.filter(item => item[0] !== supressed))
    getNext()
  }

  return (
    <div className="App">
      <main className="Main">
        <Card
          binomial={data.length > 0 && data.includes(item) ? item[0] : ""}
          common={data.length > 0 && data.includes(item) ? item[1] : [""]}
          imgFilename={data.length > 0 && data.includes(item) ? item[2] : ""}
          toggle={toggle}
          onClick={() => setToggle(!toggle)} />
      </main>
      <footer className="Footer">
        <div className="Toolbar">
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
          onClick={() => supress(item[0])}
          value={`Card done (${data.length} left)`}
          disabled={data.length === 0 || !data.includes(item)} />
        <input
          type="button"
          className="App-button"
          onClick={getNext}
          value="Next"
          disabled={data.length === 0 || (data.length === 1 && data.includes(item))} />
      </footer>
    </div>
  );
}

export default App;