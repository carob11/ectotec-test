import React, { Component } from 'react';
import InputText from './inputText';
import InputCalendar from './inputCalendar';
import InputSearch from './inputSearch';

export default class Contacto extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form action='' method='post' onSubmit={this.onSubmit}>
          <InputText label='Nombre' name='nombre' />
          <InputText label='Email' name='email' />
          <InputText label='Teléfono' name='telefono' />
          <InputCalendar />
          <InputSearch />
          <button className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    )
  }
}