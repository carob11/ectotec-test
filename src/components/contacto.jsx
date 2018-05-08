import React, { Component } from 'react';
import InputText from './inputText';
import InputCalendar from './inputCalendar';

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
          <InputCalendar locale='es' format='DD/MM/YYYY' date='4-12-2014' />
          <InputText label='Ciudad y Estado' name='ciudad' />
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}