import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Profile = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Redirect to signup if access token is not present
    if (!user || !user.accessToken) {
      history.push('/signup');
    }
  }, [history, user]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Redirect to signup page
    history.push('/signup');
  };

  return (
    <div className="profile-container">
      <h2 >Profile</h2>
      {user && user.accessToken ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Unauthorized access!</p>
      )}
    </div>
  );
};

export default Profile;
