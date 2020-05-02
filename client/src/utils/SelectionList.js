import React, { useState } from 'react';
export default function SelectionList({ onCLickAction, countryList }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        position: 'absolute',
        margin: '0 auto',
        top: '1rem',
        left: 0,
        zIndex: 50,
      }}
    >
      {countryList.map(([countryId, countryName]) => (
        <li
          key={countryId}
          style={{
            cursor: 'pointer',
            background: 'grey',
            color: 'white',
            border: '1px solid grey',
            borderRadius: '.5rem',
            minWidth: '5rem',
            width: '50%',
            margin: '.2rem',
            textAlign: 'center',
            padding: '.5rem',
          }}
          onClick={() => {
            onCLickAction(countryId);
          }}
        >
          {countryName}
        </li>
      ))}
    </ul>
  );
}
