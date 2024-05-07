import React, { useState, useEffect } from 'react';
import $ from 'jquery';

export function ShowCharacterInfo(props) {
  const { data } = props;
  return (
    <>
    <p><b>Name:</b> {data.name}</p>
    <p><b>base_experience:</b> {data.base_experience}</p>
    </>
  )
}

export function Pokemon(props) {
  const [data, setData] = useState(null);
  const { id } = props;

  useEffect(function() {
    setData(null);
    const $xhr = $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}/`, setData);

    return function abort() {
      $xhr.abort();
    }
  }, [id]);

  return (
    <div>
      <pre>Debug: id = {id}</pre>
      {data ? <ShowCharacterInfo data={data} /> : 'Loading, please wait'}
    </div>
  );
}



