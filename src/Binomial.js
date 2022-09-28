import React from 'react';
import { Card } from './Card'
import { getData } from './data'

function Binomial() {
  const [data, setData] = React.useState(getData())

  const [item, setItem] = React.useState(data[0])
  const [toggle, setToggle] = React.useState(false)
  const [binomialFirst, setBinomialFirst] = React.useState(true)
  const [pictureToggle, setPictureToggle] = React.useState(true)

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
    <main className="Main">

      <Card
        binomial={data.length > 0 && data.includes(item) ? item[0] : ""}
        common={data.length > 0 && data.includes(item) ? item[1] : [""]}
        imgFilename={data.length > 0 && data.includes(item) ? item[2] : ""}
        toggle={toggle}
        togglePicture={pictureToggle}
        onClick={() => setToggle(!toggle)} />
      <div className="Toolbar">
        <label htmlFor="binomial">Binomial
          <input
            type="radio"
            name="direction"
            value="binomial"
            id="binomial"
            checked={binomialFirst}
            onChange={() => setBinomialFirst(true)} />
        </label>
        <label htmlFor="common">Common
          <input
            type="radio"
            name="direction"
            value="Common"
            id="common"
            checked={!binomialFirst}
            onChange={() => setBinomialFirst(false)} />
        </label>
        <label htmlFor="common">Picture
          <input
            type="checkbox"
            name="picture"
            id="picture"
            checked={pictureToggle}
            onChange={() => setPictureToggle(!pictureToggle)} />
        </label>
      </div>
      <footer className='Footer'>
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
    </main>
  );
}

export default Binomial;
