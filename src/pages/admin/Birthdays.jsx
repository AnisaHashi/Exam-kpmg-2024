import React, { useState } from 'react';
import '../../Css/Birthdays.css'; // Add necessary CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const postBirthday = async (date, name, message, file) => {
  const formData = new FormData();
  formData.append('date', date);
  formData.append('name', name);
  formData.append('message', message);
  formData.append('image', file);

  try {
    const response = await axios.post('/api/birthdays', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload successful:', response.data);
    // Handle the response as needed
  } catch (error) {
    console.error('Error uploading files:', error);
    // Handle the error as needed
  }
};

export const Birthdays = () => {
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postBirthday(date, name, message, file);

    navigate('/admin');
  };

  return (
    <div className="birthdays-container">
      <div className="content-wrapper">
        <div className="Birthdays-logo">
          <img
            src={'src/assets/kpmg-logo.png'} // Adjust the path as needed
            alt="KPMG Logo"
          />
        </div>
        <div className="birthdays-box">
          <h2>BIRTHDAYS</h2>
          <form>
            <div className="form-row">
              <input onChange={handleDate} type="date" placeholder="Date" />
              <input type="file" multiple onChange={handleFile} />
            </div>
            <div className="form-row">
              <input onChange={handleName} type="text" placeholder="Name..." />
              <input onChange={handleMessage} type="text" placeholder="Message..." />
            </div>
            <button onClick={handleSubmit} type="submit" className="birthday-submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
