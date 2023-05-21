import React from "react";

const SignUpOne = ({ setUserInfo, userInfo,setCount,count }) => {
  const firstPageInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="text-center">Sign Up</h2>
      <input
        onChange={firstPageInfo}
        name="emailAddress"
        type="email"
        placeholder="Email Address"
        defaultValue={userInfo.emailAddress}
      />
      <br />
      <input
        onChange={firstPageInfo}
        name="userName"
        type="text"
        placeholder="Username"
        defaultValue={userInfo.userName}
      />
      <br />
      <input
        onChange={firstPageInfo}
        name="password"
        type="password"
        placeholder="Password"
        defaultValue={userInfo.password}
      />
      <br />
      <button onClick={()=>setCount(count+1)}>Next</button>
    </div>
  );
};

export default SignUpOne;
