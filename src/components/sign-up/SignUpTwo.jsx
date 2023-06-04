import React from "react";

const SignUpTwo = ({
  setUserInfo,
  userInfo,
  setCount,
}) => {
  const secondPageInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-center">Sign Up</h2>
      <input
        onChange={secondPageInfo}
        name="firstName"
        type="text"
        placeholder="First Name"
        className="first-name"
        defaultValue={userInfo?.firstName}
      />
      <input
        onChange={secondPageInfo}
        name="lastName"
        type="text"
        placeholder="Last Name"
        className="last-name"
        defaultValue={userInfo?.lastName}
      />
      <br />
      <input
        onChange={secondPageInfo}
        name="residence"
        type="text"
        placeholder="Country of Residence"
        defaultValue={userInfo?.residence}
      />
      <br />
      <input
        onChange={secondPageInfo}
        name="education"
        type="text"
        placeholder="Level of education"
        defaultValue={userInfo?.education}
      />
      <br />
      <button
        className="button-left"
        onClick={() => setCount((previous) => previous - 1)}
      >
        Previous
      </button>
      <button
        className="button-right"
        onClick={() => setCount((previous) => previous + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default SignUpTwo;
