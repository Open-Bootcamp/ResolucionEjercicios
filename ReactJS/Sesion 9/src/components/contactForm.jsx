import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
  const name = useRef('');
  const email = useRef('');

  function addContact(e) {
    e.preventDefault();

    const newContact = { nombre: name.current.value, email: email.current.value, conectado: true };

    onAddContact(newContact);
    name.current.value = '';
    email.current.value = '';
  }

  return (
    <form onSubmit={addContact} className="contact-component">
      <h2>Añadir Contacto: </h2>
      <input ref={name} name="name" placeholder="Nombre contacto" className="form-control mb-2" />
      <input ref={email} name="email" type="email" placeholder="Email contacto" />
      <button onClick={addContact} type="submit" className="submit-button">
        Añadir
      </button>
    </form>
  );
};

export default ContactForm;
