import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className='form-group row'>
        <label className='col-sm-2 col-form-label'>{this.props.label}:</label>
        <input className='form-control col-sm-10' type='text' name={this.props.label} />
      </div>
    )
  }
}

Input.defaultProps = {
  name: 'data',
  label: 'label'
};