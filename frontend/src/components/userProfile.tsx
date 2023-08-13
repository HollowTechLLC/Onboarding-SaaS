"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import userProfile from '/userPofile.png';
import defaultProfile from '/defaultProfile.png';

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className='userProfile'>
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <img
          src={isLoggedIn ? '/userPofile.png' : '/userPofile.png'}
          alt="Profile"
          className='profileImage'
          height={40}
          width={40}
        />
      </div>
      {showDropdown && (
        <div className='dropdown'>
          {!isLoggedIn ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <>
              <a href="/profile">My Profile</a>
              <a href="/settings">Settings</a>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
