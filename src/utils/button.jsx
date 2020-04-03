import React from 'react';
function Button(props) {
  console.log(props)
  return (
    <button onClick={props.handleRemoveElement} disabled={props.button}>Remove all</button>
  )
}

export default Button;