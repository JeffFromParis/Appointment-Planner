import React from "react";

export const ContactPicker = (props) => {

  const contactList = props.contacts;
  const onChange = props.onChange;
  
  return (
    <select onChange={onChange}>
      <option value="">Select a contact</option>
      {contactList.map((contact,index) => <option value={contact.name} key={index}>{contact.name}</option>)}
    </select>
  );
};
