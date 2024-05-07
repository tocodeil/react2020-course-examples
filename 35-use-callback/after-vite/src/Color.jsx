import React from 'react';
import { useState, useRef, useCallback } from 'react';
import tinycolor from 'tinycolor2';

const ColorBox = React.memo(function ColorBox(props) {
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
});

export default React.memo(function ColorPalette(props) {
  console.log('Color Palette');
  const { start } = props;
  const [nonce, setNonce] = useState(0);

  const deletedBoxesRef = useRef(new Set());
  const deletedBoxes = deletedBoxesRef.current;

  const removeBox = useCallback(function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setNonce(v => v + 1);
  }, [deletedBoxes]);

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        key={i}
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
      />
    );
  }
  return colors;
});



