import React from 'react';
import '../App.css';

export default function RadioGroup({ name, handleChange, values }) {
  return (
    <div>
      {
        values.map(item => (<div className='radioGroup'>
          <input className='radio' id={item.value} type="radio" value={item.value} name={name} onChange={handleChange} />
          <label className="radioLabel" htmlFor={item.value}>{item.label}</label>
        </div>))
      }
    </div>
  )
}

