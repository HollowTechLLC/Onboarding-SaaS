"use client"
import React, { useState } from 'react';
import axios from 'axios'; // You'll need to install the axios library using npm or yarn
import { useForm } from 'react-hook-form';

// This is the Registration component
const Register = () => {
  // useState hooks to manage form input state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [message, setMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [DOB, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [license, setLicense] = useState('');
  const [licenseExpiry, setLicenseExpiry] = useState('');

  const { register, formState: { errors } } = useForm();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // Prevent default page reload on form submission

    // Prepare the data to send to the server
    const data = { username, password, role };

    try {
      // Send a POST request to the /register endpoint with the form data
      const response = await axios.post('/api/register', data);

      // Handle the response from the server
      if (response.data.success) {
        // Registration successful - you can redirect to login page or show success message
        setMessage('Registration successful! Please log in.');
      } else {
        // Handle error if registration was not successful
        setMessage('Registration failed: ' + response.data.error);
      }
    } catch (error) {
      // Handle any network or server-side errors
      setMessage('An error occurred while registering: ' + error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Username:</span>
          <input
            type="text"
            {...register('username', {
              required: "Username is required",
              pattern: { value: /^[^\s]+$/, message: "No spaces allowed" },
              minLength: { value: 4, message: "Minimum 4 characters" },
              maxLength: { value: 36, message: "Maximum 36 characters" }
            })}
            required className="mt-1 p-2 w-full rounded-md border-gray-300" 
          />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
        <label className="block">
          <span className="text-gray-700">Password:</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 p-2 w-full rounded-md border-gray-300" />
        </label>
        <label className="block">
          <span className="text-gray-700">Role:</span>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300">
            <option value="Driver">Driver</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
          {role === 'Driver' && (
            <div>
              <br/>
              {/* Additional input fields for drivers */}
              <label className='block'>
                <span className="text-gray-700">Full Name:</span>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              <label className='block'>
                <span className="text-gray-700">Date of Birth:</span>
                <input type="date" value={DOB} onChange={(e) => setDOB(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              <label className='block'>
                <span className="text-gray-700">Gender:</span>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label className='block'>
                <span className="text-gray-700">Phone:</span>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              <label className='block'>
                <span className="text-gray-700">Address:</span>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              <label className='block'>
                <span className="text-gray-700">CDL License #:</span>
                <input type="text" value={license} onChange={(e) => setLicense(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              <label className='block'>
                <span className="text-gray-700">License Expiry:</span>
                <input type="date" value={licenseExpiry} onChange={(e) => setLicenseExpiry(e.target.value)} className="mt-1 p-2 w-full rounded-md border-gray-300" />
              </label>
              {/* More fields as needed */}
            </div>
          )}
        </label>
        <button type="submit" className="w-full p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>} {/* Display the message (success or error) */}
    </div>
    </div>
  );
};

export default Register;
