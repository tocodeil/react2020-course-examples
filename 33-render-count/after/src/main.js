import React from 'react';
import ReactDOM from 'react-dom';
import tinycolor from 'tinycolor2';
import { useState } from 'react';

function ColorBox(props) {
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

function ColorPalette(props) {
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
}

function ColorSelector(props) {
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState('#000000');

  return (
    <div>
      <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
      <div>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

ReactDOM.render(<ColorSelector/>, document.querySelector('main'));

