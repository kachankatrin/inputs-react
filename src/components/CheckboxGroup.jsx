import React from 'react';

function Checkbox(props) {
  const {hobby: {id, value, isChecked}, handleCheckSingle} = props;
  console.log(props)

  return (
    <li>
    <input key={id} type="checkbox" checked={isChecked} value={value} onChange={handleCheckSingle}/>{value}
    </li>
  )
}

export default Checkbox;

// <input key={props.id} type="checkbox" checked={props.isChecked} value={props.value} onClick={props.handleCheckSingle}/>{props.value}