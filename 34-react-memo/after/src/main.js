import React from 'react';
import ReactDOM from 'react-dom';
import tinycolor from 'tinycolor2';
import { useState, useEffect } from 'react';

function ColorBox(props) {
  console.log('Color Box');
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
}

const ColorPalette = React.memo(function ColorPalette(props) {
  console.log('Color Palette');
  const { start } = props;
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());

  function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setDeletedBoxes(new Set(deletedBoxes));
  }

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
      />
    );
  }
  return colors;
});

const Fiver = React.memo(function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
},
  function(prevProps, nextProps) {
    return (Math.floor(prevProps.ticks / 5) === Math.floor(nextProps.ticks / 5));
  });

function ColorSelector(props) {
  console.log('Color Selector');
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState('#000000');

  useEffect(function() {
    if (ticks % 7 === 0) {
      setColor('#000000');
    }
  }, [ticks]);

  return (
    <div>
      <div>
        <Fiver ticks={ticks} />
        <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

ReactDOM.render(<ColorSelector/>, document.querySelector('main'));

