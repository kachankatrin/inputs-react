import React, {Component} from 'react';
import PropTypes from 'prop-types';
class CheckboxGroup extends Component {
  state = {
    checked: [],
    error: null
  }
  handleSelect = (e) => {
    const {checked} = this.state;
    const ev = e.target.name
    if(checked.includes(e.target.value)) { //checked.indexOf(e.target.value) > -1
      this.setState({
        checked: checked.filter(item => item !==e.target.value)
      }, () => this.props.handleChange(this.state.checked, ev))
    } else {
      
      this.setState({
        checked: [...this.state.checked,
        e.target.value,]
      }, () => { 
        console.log(e.target); this.props.handleChange(this.state.checked, ev) })
    }
  }
  render(){

    const { values } = this.props;
    return (
      <div>
        {values.map(item => (
          <div className='checkboxGroup'>
            <input type='checkbox' value={item.value} name={this.props.name} id={item.value} onChange={this.handleSelect}/>
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
    )
  }
}
CheckboxGroup.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: {
    label: PropTypes.string,
    value: PropTypes.string
  }
}

export default CheckboxGroup;