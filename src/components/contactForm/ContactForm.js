import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = ({target}) => { setName(target.value); }
  const handlePhoneChange = ({target}) => { setPhone(target.value); }
  const handleEmailChange = ({target}) => { setEmail(target.value); }

  return (
    
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='name'
          value={name}
          onChange={handleNameChange}
          required
        />
        <input 
          type='tel'
          name='phone'
          value={phone}
          onChange={handlePhoneChange}
          required
          pattern="(^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$)"
        />
        <input 
          type='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
        />
        <button type = "submit">Create Contact</button>
      </form>
    
  );
};
