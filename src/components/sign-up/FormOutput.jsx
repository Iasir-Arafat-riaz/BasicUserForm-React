import React from 'react';

const FormOutput = (props) => {

  const{emailAddress,userName,firstName,lastName,residence,education}=props?.userInfo;
  const{setCount,count,setUserInfo}=props;
  
  return (
    <div>
      <div className='form-output'>
      <h5 >Email</h5>
      <div>{emailAddress}</div>
      <h5>Username</h5>
      <div>{userName}</div>
      <h5>First Name</h5>
      <div>{firstName}</div>
      <h5>Last Name</h5>
      <div>{lastName}</div>
      <h5>Country of Residence</h5>
      <div>{residence}</div>
      <h5>Level of Education</h5>
      <div>{education}</div>
      </div>
      <button className="button-left" onClick={()=>setCount(count-1)}>Previous</button>
      <button className="button-right" onClick={()=>{setCount(count+1); setUserInfo({}) }}>Confirm & Continue</button>
    </div>
  );
};

export default FormOutput;