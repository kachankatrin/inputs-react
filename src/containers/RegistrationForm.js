import React from 'react';
import Input from '../components/Input';
import {validateInputText, validateInputNumber} from '../utils/validation';
import Checkbox from '../components/CheckboxGroup';
import RadioButton from '../components/RadioGroups';
import Button from '../utils/button';
import SelectInp from '../components/SelectGroup';
import CheckboxGroup from '../components/checkbox1';
import RadioGroup from '../components/radiogroup';
import Table from '../components/Table';

// const data = {};
let checkMe;
const TableData = [
  {id: 1, film: 'Once Upon a Time in Hollywood', hero: 'Rick Dalton', genre: 'comedy-drama'},
  {id: 2, film: 'Lord of the Rings', hero: 'Frodo', genre:'aventure-fantasy'},
  {id: 3, film: 'Rabbit Jojo', hero: 'Jojo', genre:'drama'},
  {id: 4, film: 'Harry Potter and the Order of the Phoenix', hero: 'Harry Potter', genre:'fantasy'},
  {id: 5, film: 'Birds of Prey', hero: 'Harley Quinn', genre:'action-adventure-criminal'}
]
class RegistrationForm extends React.Component {
  state = {
    formData: {
      name:  '',
      surname: '',
      age: '',
      hobbies: [
        {id: 1, value: 'hiking', isChecked: false},
        {id: 2, value: 'running', isChecked: false}, 
        {id: 3, value: 'reading', isChecked: false}, 
        {id: 4, value: 'cooking', isChecked: false}, 
        {id: 5, value: 'biking', isChecked: false}
      ],
      buttonHobbies: true,
      skills: [
        {id: 1, value: 'breath', isChecked: false},
        {id: 2, value: 'work', isChecked: false}, 
        {id: 3, value: 'do nothing', isChecked: false}, 
        {id: 4, value: 'sleep', isChecked: false}, 
        {id: 5, value: 'do some stuff', isChecked: false}
      ],
      buttonSkills: true,
      sex: '',
      country: 'Ukraine',
      data: TableData
    }
  };


  handleCheckSingleHobby = (e) => {
    let hobbies = this.state.formData.hobbies;
    const hobbiesCheckedAll = this.state.formData.hobbies.filter(item => {
      return (item.isChecked === true)
    })
    console.log(hobbiesCheckedAll.length, 'all')
    hobbies.forEach(item => {
      if (item.value === e.target.value) {
        item.isChecked = e.target.checked;
        // item.isChecked = !item.isChecked;
      }
      // else if (item.isChecked === true) {
      //   item.isChecked = false
      // } else {
      //   this.handleRemoveHobby()
      // }
    })
    this.setState({
      formData: {
        ...this.state.formData, 
        hobbies,
      }
    })
    // hobbiesCheckedAll.length ? hobbies.forEach(item => {
    //   if (item.value === e.target.value) {
    //     item.isChecked = e.target.checked;
    //   }
    // }) : this.handleRemoveHobby()
    // this.handleRemoveHobby()
  }
handleRemoveHobby = () => {
  console.log()
  
  const hobbies = this.state.formData.hobbies.filter(item => {
    return (item.isChecked === false)
  })
  console.log(hobbies)
  this.setState({
    formData: {
      ...this.state.formData, 
      hobbies,
    }
  })
  
}
  handlecheckAllHobbies = (e) => {
    let hobbies = this.state.formData.hobbies;
    hobbies.forEach(item => {
        item.isChecked = e.target.checked;
    })
    this.setState({
      formData: {
        ...this.state.formData, 
        hobbies: hobbies,
        buttonHobbies: !this.state.formData.buttonHobbies
      }
    })
  }




  handleCheckSingleSkill = (e) => {
    let skills = this.state.formData.skills;
    const skillsCheckedAll = this.state.formData.skills.filter(item => {
      return (item.isChecked === true)
    })
    skills.forEach(item => {
      if (item.value === e.target.value) {
        item.isChecked = e.target.checked;
        // item.isChecked = !item.isChecked;
      }
    })
    this.setState({
      formData: {
        ...this.state.formData, 
        skills,
      }
    })
    skillsCheckedAll.length ? skills.forEach(item => {
      if (item.value === e.target.value) {
        item.isChecked = e.target.checked;
      }
    }) : this.handleRemoveSkill()
  }
handleRemoveSkill = () => {
  const skills = this.state.formData.skills.filter(item => {
    return (item.isChecked === false)
  })
  this.setState({
    formData: {
      ...this.state.formData, 
      skills,
    }
  })
  
}
  handlecheckAllSkills = (e) => {
    let skills = this.state.formData.skills;
    skills.forEach(item => {
        item.isChecked = !item.isChecked;
    })
    this.setState({
      formData: {
        ...this.state.formData, 
        skills,
        buttonSkills: !this.state.formData.buttonSkills
      }
    })
  }




  handleFieldChange = (value, fieldName) => {
    console.log(fieldName, 'fieldNan')
    this.setState({
      formData: {
        ...this.state.formData, 
        [fieldName]: value,
      }
    })
  }
  // handleSurnameChange = (surname, fieldName) => {
  //   this.setState({
  //     formData: {
  //       ...this.state.formData, 
  //       [fieldName]: surname,
  //     }})
  // }
  // handleAgeChange = (age, fieldName) => {
  //   this.setState({
  //     formData: {
  //       ...this.state.formData, 
  //       [fieldName]: age
  //     }
  //   })
  // }
  handleChangeRadio = (e) => {
    console.log(e.target)
    this.setState({
      formData: {
      ...this.state.formData, 
      sex: e.target.value
    }
  });
  }

  handleSelect = (e) => {
    this.setState({
      formData: {
      ...this.state.formData,
      country: e.target.value
      }
    })
  }
 
  handleSexSelect = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        sex: e.target.value
      }
    }
    // () => console.log(this.state.formData, e.target.value)
    )
    // console.log(e.target.value, this.state.formData.sex)
  }

  handleHobbySelect = (hobbies) => {
    this.setState({
      formData: {
      ...this.state.formData,
      hobbies
      }
    })

  }
  render() {
    // checkMe = this.state.formData.data.map(item => item.select = <CheckboxGroup values={
    //   [{label: item.name, value: item.id}]
    // } handleChange={this.handleFieldChange}/>);

    checkMe = <CheckboxGroup values={
      this.state.formData.data.map(item => {
        return {label: item.name, value: item.id}
      })
    } handleChange={this.handleFieldChange}/>;
    console.log(checkMe)

    return (
      <div>
        <div>
          <Input name='name' handleChange={this.handleFieldChange} validate={validateInputText} value={this.state.formData.name}/>
          <Input name='surname' handleChange={this.handleFieldChange} validate={validateInputText} />
          <Input name='age' handleChange ={this.handleFieldChange} validate={validateInputNumber}/>
          <RadioGroup name="sex" values={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]} handleChange={this.handleSexSelect}/>
          <CheckboxGroup name='hobbies' 
          values={
            [{label: 'Snowboarding', value: 'snowboarding'}, {label: 'Bunjo jumping', value: 'banjo'}, {label: 'Makrame', value: 'makrame'}]
          } handleChange={this.handleFieldChange}/>
          My Registration form
        </div>


        <div>
          <h1>hobbies</h1>
          
          <input type="checkbox" value="chekAll" onClick={this.handlecheckAllHobbies}/> check/uncheck all
          <ul>
            {this.state.formData.hobbies.length ? this.state.formData.hobbies.map(
              item => 
                <Checkbox hobby={item} key={item.id} checked={item.isChecked} handleCheckSingle={this.handleCheckSingleHobby}/>
            ) : 'No data'}
            
          </ul>
          <Button handleRemoveElement={this.handleRemoveHobby} button={this.state.formData.buttonHobbies}/>
        </div>

        <div>
          <h1>skills</h1>
          <input type="checkbox" value="chekAll" onClick={this.handlecheckAllSkills}/> check/uncheck all
          <ul>
            {this.state.formData.skills.length ? this.state.formData.skills.map(
              item => 
                <Checkbox hobby={item} key={item.id} checked={item.isChecked} handleCheckSingle={this.handleCheckSingleSkill}/>
            ) : 'No data'}
            
          </ul>
          <Button handleRemoveElement={this.handleRemoveSkill} button={this.state.formData.buttonSkills}/>
        </div>
        <div>
          <h1>Choose your gender</h1>
          <ul>
            <RadioButton value='Female' checked={this.state.formData.sex === 'Female'} handleChange={this.handleChangeRadio}/>
            <RadioButton value='Male' checked={this.state.formData.sex === 'Male'} handleChange={this.handleChangeRadio}/>
            <RadioButton value='Other' checked={this.state.formData.sex === 'Other'} handleChange={this.handleChangeRadio}/>
          </ul>
        </div>
        <div>
          <SelectInp value={this.state.formData.country} handleChange={this.handleSelect}/>
        </div>   
        <div>
          <Table data={this.state.formData.data}/>
        </div>
      </div>
    )
  }
}

export default RegistrationForm;