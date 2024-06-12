import React, { useState } from 'react';
import '../../Css/CafeteriaFood.css'; // Add necessary CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const postMenu = async (category, description) => {
  const formData = new FormData();
  formData.append('category', category);
  formData.append('description', description);

  try {
    const response = await axios.post('/api/menus', formData, {
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

export const CafeteriaFood = () => {
  const [lunch1, setLunch1] = useState('');
  const [lunch2, setLunch2] = useState('');
  const [lunch3, setLunch3] = useState('');

  const [dinner1, setDinner1] = useState('');
  const [dinner2, setDinner2] = useState('');
  const [dinner3, setDinner3] = useState('');

  const [drinks1, setDrinks1] = useState('');
  const [drinks2, setDrinks2] = useState('');
  const [drinks3, setDrinks3] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const lunch = [lunch1, lunch2, lunch3];
    const dinner = [dinner1, dinner2, dinner3];
    const drinks = [drinks1, drinks2, drinks3];

    await postMenu('lunch', lunch);
    await postMenu('dinner', dinner);
    await postMenu('drinks', drinks);

    navigate('/admin');
  };

  return (
    <div className="cafeteria-food-container">
      <div className="content-wrapper">
        <div className="cafeteria-logo">
          <img
            src={'src/assets/kpmg-logo.png'} // Adjust the path as needed
            alt="KPMG Logo"
          />
        </div>
        <div className="cafeteria-food-box">
          <h2>CAFETERIA FOOD</h2>
          <form>
            <div className="form-column">
              <h3>
                Lunch{' '}
                <span role="img" aria-label="lunch">
                  🍲
                </span>
              </h3>
              <input
                onChange={(e) => setLunch1(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setLunch2(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setLunch3(e.target.value)}
                type="text"
                placeholder="new item..."
              />
            </div>
            <div className="form-column">
              <h3>
                Dinner{' '}
                <span role="img" aria-label="dinner">
                  🍽️
                </span>
              </h3>
              <input
                onChange={(e) => setDinner1(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setDinner2(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setDinner3(e.target.value)}
                type="text"
                placeholder="new item..."
              />
            </div>
            <div className="form-column">
              <h3>
                Drinks{' '}
                <span role="img" aria-label="drinks">
                  🥤
                </span>
              </h3>
              <input
                onChange={(e) => setDrinks1(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setDrinks2(e.target.value)}
                type="text"
                placeholder="new item..."
              />
              <input
                onChange={(e) => setDrinks3(e.target.value)}
                type="text"
                placeholder="new item..."
              />
            </div>
          </form>
          <div className="submit-div">
            <button onClick={handleSubmit} type="submit" className="cafeteria-submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
