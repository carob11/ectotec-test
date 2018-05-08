import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className='form-group row'>
        <label className='col-sm-2 col-form-label'>{this.props.label}:</label>
        <input 
          className={`form-control col-sm-10 ${this.props.err ? 'is-invalid' : ''}`}
          type='text' 
          value={this.props.value} 
          onChange={
            (e) => {
              this.props.onChange(e.target.value)
            }
          }
        />
      </div>
    )
  }
}

Input.defaultProps = {
  label: 'label',
  value: '',
  onChange: () => {},
  err: false
};