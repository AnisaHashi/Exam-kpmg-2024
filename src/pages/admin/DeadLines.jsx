import React, { useState } from 'react';
import '../../Css/DeadLines.css'; // Add necessary CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const postDeadline = async (date, title, description, file) => {
  const formData = new FormData();
  formData.append('date', date);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', file);

  try {
    const response = await axios.post('/api/reminders', formData, {
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

export const DeadLines = () => {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postDeadline(date, title, description, file);

    navigate('/admin');
  };

  return (
    <div className="deadlines-container">
      <div className="content-wrapper">
        <div className="deadlines-logo">
          <img
            src={'src/assets/kpmg-logo.png'} // Adjust the path as needed
            alt="KPMG Logo"
          />
        </div>
        <div className="deadlines-box">
          <h2>DEADLINES</h2>
          <form>
            <div className="form-column">
              <input onChange={handleDate} type="date" placeholder="Date" />
              <input onChange={handleTitle} type="text" placeholder="Title..." />
              <textarea onChange={handleDescription} type="text" placeholder="Description ..." />
              <input type="file" multiple onChange={handleFile} />
            </div>
            <button onClick={handleSubmit} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
