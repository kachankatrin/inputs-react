import React from 'react';

class Input extends React.Component {
  state = {
    error: '',
    value: ''
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
      error: ''
    })
    this.props.handleChange(e.target.value)
    this.handleBlur()
  }
  handleBlur = () => {
    const error = this.props.validate(this.state.value);
    console.log(error)
    if(!!error) {
      this.setState({error})
    }
  }
  
  render() {
    const {name} = this.props;
    return (
      <div>
        <input type="text" name={name} id={name} onChange={this.handleInputChange} onBlur={this.handleBlur} value={this.state.value}/>
        <label htmlFor={name}>{name}</label>
        <div className="error">{this.state.error}</div>
      </div>
    )
  }
}

export default Input;