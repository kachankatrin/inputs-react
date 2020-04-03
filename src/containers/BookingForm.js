import React from 'react';
import Checkbox from '../components/CheckboxGroup'
import Button from '../utils/button'
class BookingForm extends React.Component {
  state = {
    bookingData: [
      {id: 1, value: 'Person Id', isChecked: false},
      {id: 2, value: 'payment info', isChecked: false}, 
      {id: 3, value: 'duration of stay', isChecked: false}, 
      {id: 4, value: 'arriving time', isChecked: false}, 
      {id: 5, value: 'depaturing time', isChecked: false}
    ],
    button: true
  }
  handleCheckSingle = (e) => {
    let bookingData = this.state.bookingData;
    bookingData.forEach(item => {
      if (item.value === e.target.value) {
        item.isChecked = e.target.checked;
        // item.isChecked = !item.isChecked;
      }
    })
    this.setState({bookingData: bookingData})
    this.handleRemoveElement()
  }
handleRemoveElement = () => {
  const bookingData = this.state.bookingData.filter(item => {
    return (item.isChecked === false)
  })
  this.setState({bookingData: bookingData})
  
}

  handlecheckAll = (e) => {
    let bookingData = this.state.bookingData;
    bookingData.forEach(item => {
        item.isChecked = !item.isChecked;
    })
    this.setState({
      bookingData: bookingData,
      button: !this.state.button
    })
  }

  render() {
    console.log(this.state.bookingData)

    return (
      <div>
      <h1>Data to get from customer</h1>
      
      <input type="checkbox" value="chekAll" onClick={this.handlecheckAll}/> check/uncheck all
      <ul>
        {this.state.bookingData.length ? this.state.bookingData.map(
          item => 
            <Checkbox hobby={item} key={item.id} checked={item.isChecked} handleCheckSingle={this.handleCheckSingle}/>
        ) : 'No data'}
        
      </ul>
      <Button handleRemoveElement={this.handleRemoveElement} button={this.state.button}/>
      </div>
    )
  }
}

export default BookingForm;

// <Checkbox {...item} handleCheckSingle={this.handleCheckSingle}/>