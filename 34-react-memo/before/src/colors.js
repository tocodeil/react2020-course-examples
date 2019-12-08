import React from 'react';
import { useState } from 'react';
import tinycolor from 'tinycolor2';

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

function ColorPalette(props) {
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
}


