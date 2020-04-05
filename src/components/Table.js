import  React, { Component } from 'react';
class Table extends Component {
  state = {
    checked: [],
  }

  
  renderTableHeader() {
    const newObj = [...Object.keys(this.props.data[0]), 'check'];
    return newObj.map((key, index) => {
      console.log(newObj)
      return <th key={index}>{key.toUpperCase()}</th>
    })
  
  }
  renderTable() {
    return this.props.data.map((data) => {
        const {id, film, hero, genre} = data;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{film}</td>
            <td>{hero}</td>
            <td>{genre}</td>
            <td><input type='checkbox' value={film} onChange={this.handleCheck}/></td>
          </tr>
        )
      })
      
  }
  handleCheck = (e) => {
    if(this.state.checked.includes(e.target.value)) {
      this.setState({
        checked: this.state.checked.filter(item => item !== e.target.value)
      })
    } else {
      this.setState({
        checked: [...this.state.checked,
        e.target.value]
      })
    }
  }
  render() {
    return (
      <div>
        <h1 id="title">Film Table</h1>
        <table id="films">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Table;


