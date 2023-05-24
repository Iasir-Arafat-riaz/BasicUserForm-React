import React, { useState } from "react";
import SignUpOne from "./sign-up/SignUpOne";
import SignUpTwo from "./sign-up/SignUpTwo";
import FormOutput from "./sign-up/FormOutput";
import Done from "./sign-up/Done";

const Form = () => {
  const [userInfo, setUserInfo] = useState({});
  const [count, setCount] = useState(1);
  console.log(userInfo, count);
  return (
    <div className=" default-view">
      <div className="contaainer">
        {count === 1 && (
          <SignUpOne
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            setCount={setCount}
          />
        )}
        {count === 2 && (
          <SignUpTwo
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            setCount={setCount}
          />
        )}
        {count === 3 && (
          <FormOutput
            userInfo={userInfo}
            setCount={setCount}
            setUserInfo={setUserInfo}
          />
        )}
        {count === 4 && <Done />}
      </div>
    </div>
  );
};

export default Form;
