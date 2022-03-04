import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  const contacts = props.contacts;

  /*
  Define state variables for 
  appointment info
  */
  const [title,setTitle] = useState('');
  const [contact,setContact] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');

  const resetForm = () => {
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    resetForm();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList
            contactOrAppointmentArray={appointments} 
          />
      </section>
    </div>
  );
};
