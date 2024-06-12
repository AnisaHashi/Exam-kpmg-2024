import React, { useState } from 'react';
import '../../Css/DailyAgenda.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const postAgenda = async (date, time, room, title) => {
  const data = {
    date: date,
    time: time,
    room: room,
    title: title,
  };

  try {
    const response = await axios.post('/api/agendas', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Upload successful:', response.data);
    // Handle the response as needed
  } catch (error) {
    console.error('Error uploading data:', error);
    // Handle the error as needed
  }
};

export const DailyAgenda = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [room, setRoom] = useState();
  const [title, setTitle] = useState();

  const navigate = useNavigate();

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleRoom = (event) => {
    setRoom(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postAgenda(date, time, room, title);

    navigate('/admin');
  };

  return (
    <div className="daily-agenda-container">
      <div className="kpmg-logo">
        <img src={'src/assets/kpmg-logo.png'} alt="KPMG Logo" />
      </div>
      <div className="daily-agenda-box">
        <h2 className="agenda-title">DAILY AGENDA</h2>
        <form>
          <div className="form-row">
            <input onChange={handleDate} type="date" placeholder="Date" />
            <input onChange={handleTime} type="time" placeholder="Time" />
          </div>
          <div className="form-row">
            <input onChange={handleRoom} type="number" placeholder="Room" />
            <input onChange={handleTitle} type="text" placeholder="Title" />
          </div>
          <button onClick={handleSubmit} className="daily-agenda-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
