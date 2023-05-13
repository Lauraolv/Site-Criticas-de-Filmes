import React from 'react';
import "./InputData.css"


class InputData extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='container'>
          <label className='description'>{description}</label>
          <input type={type} placeholder={placeholder} className='input' id={id} name = {name}/>
        </div>
      );
    }
  }
  
  export default InputData;