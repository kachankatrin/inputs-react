import React from 'react';

function RadioButton(props) {
  return (
    
      <li>
        <label>
          <input value={props.value} type="radio" checked={props.checked} onChange={props.handleChange}/>
          {props.value}
        </label>
      </li>
  )
}

export default RadioButton;