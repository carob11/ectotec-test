import React, { Component } from 'react';
import InputText from './inputText';
import InputCalendar from './inputCalendar';
import InputSearch from './inputSearch';
import Validator from './../utils/validator';
import ErrorModal from './errorModal';

export default class Contacto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre: {
        val: '',
        err: false
      },
      email: {
        val: '',
        err: false
      },
      telefono: {
        val: '',
        err: false
      },
      fecha: {
        val: '',
        err: false
      },
      ciudad: {
        val: '',
        err: false
      },
      modal: {
        show: false,
        errors: []
      }
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }


  onSubmit(e) {
    e.preventDefault();

    const state = Object.assign({}, this.state)
    let emptyFields = false
    Object.keys(this.state).forEach((key) => {
      if (key != 'modal') {
        if (!Validator.isNotEmpty(this.state[key].val)) {
          state[key].err = true
          emptyFields = true
        } else {
          state[key].err = false
        }
      }
    });

    let isValidEmail = Validator.isValidEmail(this.state.email.val)
    state.email.err = !isValidEmail

    const modalErrors = []
    if (emptyFields) {
      modalErrors.push('Verifique los campos vacíos')
    }

    console.log(!isValidEmail)
    if (!isValidEmail) {
      modalErrors.push('Ingrese un correo válido')
    }

    state.modal.show = emptyFields || !isValidEmail
    state.modal.errors = modalErrors

    this.setState(state)
  }

  changeVal(key, newVal) {
    const state = Object.assign({}, this.state)
    state[key].val = newVal
    this.setState(state)
  }

  closeModal() {
    const modal = {
      show: false,
      errors: []
    }
    this.setState({ modal })
  }

  render() {
    return (
      <div>
        <form action='' method='post' onSubmit={this.onSubmit}>
          <InputText
            label='Nombre'
            value={this.state.nombre.val}
            err={this.state.nombre.err}
            onChange={(newVal) => {
              this.changeVal('nombre', newVal)
            }}
          />
          <InputText
            label='Email'
            value={this.state.email.val}
            err={this.state.email.err}
            onChange={(newVal) => {
              this.changeVal('email', newVal)
            }}
          />
          <InputText
            label='Teléfono'
            value={this.state.telefono.val}
            err={this.state.telefono.err}
            onChange={(newVal) => {
              this.changeVal('telefono', newVal)
            }}
          />
          <InputCalendar />
          <InputSearch />
          <button className='btn btn-primary'>Enviar</button>
        </form>
        {
          this.state.modal.show &&
          <ErrorModal errors={this.state.modal.errors} handleClose={this.closeModal} />
        }
      </div>
    )
  }
}