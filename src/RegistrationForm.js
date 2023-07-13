import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');
  const [experience, setExperience] = useState('');
  const [fileData, setFileData] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      // Assuming file data is structured with each field on a new line
      const [uploadedName, uploadedEmail, uploadedAddress, uploadedDesignation, uploadedExperience] = lines;

      // Update form fields with data from uploaded file
      setName(uploadedName);
      setEmail(uploadedEmail);
      setAddress(uploadedAddress);
      setDesignation(uploadedDesignation);
      setExperience(uploadedExperience);
    };

    reader.readAsText(file);
    setFileData(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or further processing here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Designation:', designation);
    console.log('Experience:', experience);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="experience">Experience:</label>
        <input type="text" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="file">Upload File:</label>
        <input type="file" id="file" accept=".txt" onChange={handleFileUpload} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
