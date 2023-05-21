import { useState } from "react";

import SignUpOne from "./components/sign-up/SignUpOne";
import SignUpTwo from "./components/sign-up/SignUpTwo";

import "./App.css";
import "./assest/style.css";
import FormOutput from "./components/sign-up/FormOutput";
import Done from "./components/sign-up/Done";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [count, setCount] = useState(1);
  console.log(userInfo, count);
  return (
    <div className=" default-view">
      <div className="contaainer">
      {count == 1 ? (
        <SignUpOne
          setUserInfo={setUserInfo}
          userInfo={userInfo}
          setCount={setCount}
          count={count}
        />
      ) : count == 2 ? (
        <SignUpTwo
          setUserInfo={setUserInfo}
          userInfo={userInfo}
          setCount={setCount}
          count={count}
        />
      ) : count == 3 ? (
        <FormOutput userInfo={userInfo} setCount={setCount} count={count} setUserInfo={setUserInfo}/>
      ) : (
        <Done />
      )}
      </div>
    </div>
  );
}

export default App;
