import React, { Component } from 'react'


export default class App extends Component {
  state = {
    value : "nikhil",
    options: []
  }
  onChange = e => {
    this.setState({value: e.target.value})
  }

  render() {
    const {value, options} = this.state;
    return (
      <form>
        <h1>Current value is : {value}</h1>
        <label htmlFor="options"> Pick a value </label>
        <select id="options" value ={value} onChange={this.onChange}>
         {options.map((val,index)=>{
          return <option key={index} value={val}>{val}</option>
         })}
        </select>
      </form>
    )
  }
}

