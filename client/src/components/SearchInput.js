import React, { useState } from 'react';
import list from '../helpers/list';
import styled from 'styled-components';
import scheme from '../helpers/colorScheme';
const fontSize = '1.5rem';
const InputContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
  border-radius: 0.5rem;
  border: 2px solid ${scheme.inputBorder};
  padding: 0 0.5rem;
  transition: all 0.2s ease;
  &.active {
    border: 1px solid ${scheme.inputBorderActive};
  }
  &.active label {
    transform: translate(0, 0rem) scale(0.6);
  }
`;
const Form = styled.form`
  padding-top: 2rem;
  transition: all 2s ease;
`;
const Input = styled.input`
  width: 90%;
  margin: 0.5rem 0 0.5rem;
  padding: 0.75rem;
  font-size: ${fontSize};
  border: none;
  background: transparent;
  &:active,
  &:focus {
    outline: transparent;
  }
`;
const Label = styled.label`
  z-index: -1;
  color: grey;
  cursor: text;
  font-size: ${fontSize};
  padding: 0.25rem;
  position: absolute;
  transform-origin: top left;
  top: 0;
  left: 0;
  transform: translate(0, 1rem) scale(1);
  transition: all 0.1s ease-in-out;
`;
const ErrorContainer = styled.div`
  padding: 1rem;
  background: red;
  color: white;
  height: 10rem;
  width: 10rem;
  margin: 1rem auto;
  border-radius: 50%;
  text-transform: capitalize;
  text-align: center;
  font-style: bold;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;
export default function SearchInput({ onclick }) {
  const [text, setText] = useState('');
  const [countryList, updateList] = useState([]);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const onSearch = (e) => {
    setText(e.target.value);
    if (e.target.value !== '') {
      const input = e.target.value.toLocaleLowerCase();
      const possibleCountries = Object.entries(list).filter((combination) => {
        if (input === 'britain' || input === 'uk' || input === 'gb') {
          return combination[1].toLocaleLowerCase().includes('britain');
        } else if (input.includes('ireland')) {
          return combination[1].toLocaleLowerCase() === 'ireland';
        } else {
          return combination[1].toLocaleLowerCase().includes(input);
        }
      });
      if (possibleCountries.length === 1) {
        if (text.toLocaleLowerCase() === input.slice(0, input.length - 1)) {
          setText(possibleCountries[0][1]);
        } else {
          setText(input);
        }
      }
      updateList(possibleCountries);
    } else {
      updateList([]);
    }
  };
  const generateSelectField = () => {
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
        {countryList.map((country) => (
          <li
            key={country[0]}
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
              setText('');
              updateList([]);
              setActive(false);
              onclick(country[0]);
            }}
          >
            {country[1]}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (countryList.length === 1) {
          onclick(countryList[0][0]);
          setActive(false);
        } else {
          setActive(false);
          setError('Invalid country please try again');
          updateList([]);
          setTimeout(() => setError(false), 2000);
        }
        setText('');
        document.querySelector('input').blur();
        updateList([]);
      }}
    >
      <InputContainer className={active ? 'active' : null}>
        <Input
          type="text"
          value={text}
          onChange={onSearch}
          onFocus={(e) => setActive(true)}
          onBlur={(e) => {
            if (text === '') {
              setActive(false);
            }
          }}
        ></Input>
        <Label>
          <i>Country Name</i>
        </Label>
      </InputContainer>
      {error ? (
        <ErrorContainer className={error ? 'error' : null}>
          {error}
        </ErrorContainer>
      ) : null}
      {countryList.length > 0 ? generateSelectField() : null}
    </Form>
  );
}
