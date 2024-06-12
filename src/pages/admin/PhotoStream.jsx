import React, { useState } from 'react';
import axios from 'axios';
import '../../Css/PhotoStream.css'; // Add necessary CSS
import { useNavigate } from 'react-router-dom';

const postPhoto = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post('/api/photos', formData, {
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

export const PhotoStream = () => {
  const [photos, setPhotos] = useState([]);
  const [streamName, setStreamName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const navigate = useNavigate();

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files.map((file) => URL.createObjectURL(file)));
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadPromises = selectedFiles.map(async (file) => {
      await postPhoto(file);
    });

    await Promise.all(uploadPromises);

    setSelectedFiles([]);
    setPhotos([]);
    setStreamName('');

    navigate('/admin');
  };

  return (
    <div className="photo-stream-container">
      <div className="content-wrapper">
        <div className="photo-stream-logo">
          <img src={'src/assets/kpmg-logo.png'} alt="KPMG Logo" />
        </div>
        <div className="photo-stream-box">
          <h2>PHOTO STREAM</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Photo stream name"
              value={streamName}
              onChange={(e) => setStreamName(e.target.value)}
            />
            <input type="file" multiple onChange={handleUpload} />
            {photos.length > 0 && (
              <>
                <div className="photo-grid">
                  {photos.map((photo, index) => (
                    <div key={index} className="photo">
                      <img src={photo} alt={`Uploaded ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="submit-button" type="submit">
                  SUBMIT
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
