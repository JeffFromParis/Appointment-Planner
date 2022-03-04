import React, {useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm" 
import { TileList } from "../../components/tileList/TileList" 

export const ContactsPage = (props) => {
  
  const contacts = props.contacts;
  const addContact = props.addContact;
  
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const resetForm = () => { 
    setName('');
    setPhoneNumber('');
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isDuplicate){
      addContact(name, phoneNumber,email); //adding newContact
      resetForm();
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect( () => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setIsDuplicate(true);
      }

      return;
    }
  },
  [contacts, name]
  );

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        />
      </section>
    </div>
  );
};
