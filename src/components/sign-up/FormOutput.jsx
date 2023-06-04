import React from 'react';

const FormOutput = ({ setCount, setUserInfo, userInfo }) => {

  return (
    <div>
      <div className='form-output'>
        <h5 >Email</h5>
        <div>{userInfo?.emailAddress}</div>
        <h5>Username</h5>
        <div>{userInfo?.userName}</div>
        <h5>First Name</h5>
        <div>{userInfo?.firstName}</div>
        <h5>Last Name</h5>
        <div>{userInfo?.lastName}</div>
        <h5>Country of Residence</h5>
        <div>{userInfo?.residence}</div>
        <h5>Level of Education</h5>
        <div>{userInfo?.education}</div>
      </div>
      <button className="button-left" onClick={() => setCount(previous => previous - 1)}>Previous</button>
      <button className="button-right" onClick={() => { setCount(previous => previous + 1); setUserInfo({}) }}>Confirm & Continue</button>
    </div>
  );
};

export default FormOutput;