import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const handleTitleChange = ({target}) => { setTitle(target.value); }
  const handleDateChange = ({target}) => { setDate(target.value); }
  const handleTimeChange = ({target}) => { setTime(target.value); }
  const handleContactChange = ({target}) => { setContact(target.value); }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        value={title}
        onChange={handleTitleChange}
        required
      />
      <input
        name='date'
        type='date'
        value={date}
        onChange={handleDateChange}
        min={getTodayString()}
        required
      />
      <input
        name='time'
        type='time'
        value={time}
        onChange={handleTimeChange}
        required
      />
      <ContactPicker 
        value={contact}
        onChange={handleContactChange}
        contacts={contacts}
      />
      <button type="submit">Create Appointment</button>
    </form>
  );
};
