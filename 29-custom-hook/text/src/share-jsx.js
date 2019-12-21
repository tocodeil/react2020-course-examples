import React from 'react';

function Header(props) {
  return (
    <h1>My Header</h1>
  );
}

function Page1(props) {
  return (
    <>
      <Header />
      <p>some text</p>
    </>
  );
}

function Page2(props) {
  return (
    <Header />
    <p>other text</p>
  );
}


