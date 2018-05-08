import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

export default class InputCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({ date })
  }

  render() {
    return (
      <div className='form-group row'>
        <label className='col-sm-2 col-form-label'>{this.props.label}:</label>
        <DatePicker
          selected={this.state.date}
          onChange={this.handleChange}
          className="form-control col-sm-10"
        />
      </div>
    )
  }
}

InputCalendar.defaultProps = {
  name: 'date',
  label: 'Fecha'
};