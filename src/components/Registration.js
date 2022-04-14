import React, { useState } from 'react';

const Registration = () => {
  const [userRegistraion, setuserRegistraion] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setuserRegistraion({ ...userRegistraion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistraion,
      id: new Date().getTime().toString(),
    };
    console.log(records);

    setRecords([...records, newRecord]);
    console.log(records);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistraion.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistraion.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistraion.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistraion.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>

        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Registration;
