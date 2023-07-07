import React, { useState } from 'react';
import axios from 'axios';
import './ADGeneral.css';
import olivia from '../../../assets/olivia.svg';
import write from '../../../assets/write.svg';

export default function AdGeneral() {
  const [imageSrc, setImageSrc] = useState(olivia);
  const [shortUrl, setShortUrl] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    regNo: '',
    emailAddress: '',
    currentPassword: '',
    confirmPassword: '',
    newPassword: ''
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      console.log(reader.result);

      // Generate short URL using Bitly API
      const longUrl = reader.result;
      const accessToken = 'YOUR_BITLY_ACCESS_TOKEN'; // Replace with your Bitly access token

      axios
        .post(
          'https://api-ssl.bitly.com/v4/shorten',
          {
            long_url: longUrl
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          const shortUrl = response.data.link;
          console.log(shortUrl);
          setShortUrl(shortUrl);
        })
        .catch((error) => {
          console.error('Error generating short URL:', error);
        });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Submit the form data to the desired location
  };

  return (
    <>
      <div className="ADGeneral">
        <span>General</span>

        <div className="ADGeneral_general">
          <div className="ADGeneral_img_prt">
            <div className="AD_left">
              <div className="change-container">
                <div className="change-profile">
                  <img
                    src={imageSrc}
                    alt="profile"
                    style={{
                      borderRadius: '50%',
                      width: '130px',
                      height: '130px'
                    }}
                  />
                </div>
                <div>
                  <button className="Btn Btn--outline">
                    <p
                      className="change-text"
                      onClick={() => document.getElementById('image-input').click()}
                    >
                      Change
                    </p>
                    <img src={write} alt="write" />
                    <input
                      id="image-input"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="AD_right">
              <div className="edit-group1">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
                <label> User Name </label>
              </div>

              <div className="edit-group1">
                <input
                  type="number"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                />
                <label> Reg No. </label>
              </div>
            </div>
          </div>
        </div>
        <div className="AD_email">
          <div className="edit-group1" width={'319px'}>
            <input
              type="text"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
            <label> Email Address </label>
            <button className="Btn Btn--outline">
              <p
                className="change-text"
                onClick={() => document.getElementById('image-input').click()}
              >
                Change
              </p>
              <img src={write} alt="write" />
              <input
                id="image-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </button>
          </div>
        </div>
        <div className="AD_Pass">
          <span>Password</span>
          <div className="AD_passDetail">
            <div className="AD_passLeft">
              <div className="edit-group1">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                />
                <label> Current Password </label>
              </div>
              <div className="edit-group1">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label> Confirm Password </label>
              </div>
            </div>

            <div className="AD_PassRight">
              <div className="edit-group1">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
                <label> New Password </label>
              </div>

              <button className="Btn Btn--primary" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
        <button className="Btn Btn--outline save"> Save </button>
      
      </div>
    </>
  );
}
