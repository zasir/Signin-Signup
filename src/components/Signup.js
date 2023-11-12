import "./signup.css";
import { useState } from "react";


function Signup() {
  const [addClass, setaddClass] = useState("");
  const [savePass,setSavePass]=useState("")
  const [passChk, setPassChk] = useState(true)
  
  function handleClick(e) {
    e.preventDefault()
    let btnValue = document.querySelector("#welcome-hello-btn");
    btnValue.innerText === "LOGIN" ? setaddClass("toggle") : setaddClass("");
    
  }
  function handleOnchangePass(e){
    setSavePass(e.target.value)
  }
  function handleOnchangeCfmPass(e){
    if((savePass) !== (e.target.value)){
      setPassChk(false)
    }else{
      setPassChk(true)

    }
  }

  return (
    <div className="container">
      <div className={addClass === "toggle" ? "none" : "create"}>
        <h2>Create an account</h2>
        <div className="inputContainer">
          <form onSubmit={handleClick}>
            <div className="input">
              <label htmlFor="name" className="text">
                Full Name<span>*</span>
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="inputInner"
                required
              ></input>
            </div>

            <div className="input">
              <label htmlFor="Email" className="text">
                Your Email<span>*</span>
              </label>
              <br />
              <input type="email" id="Email" className="inputInner" required></input>
            </div>

            <div className="input">
              <label htmlFor="company" className="text">
                Company Name
              </label>
              <br />
              <input type="text" id="company" className="inputInner"></input>
            </div>

            <div className="input">
              <label htmlFor="type" className="text">
                Business type
              </label>
              <br />
              <select id="type" className="dropdown">
                <option value="" defaultValue hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="input">
              <label htmlFor="Country" className="text">
                Country
              </label>
              <br />
              <select id="Country" className="dropdown">
                <option value="" defaultValue hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="input">
              <label htmlFor="Password" className="text">
                Your Password<span>*</span>
              </label>
              <br />
              <input
              onChange={handleOnchangePass}
              required
                type="password"
                id="Password"
                className="inputInner"
              ></input>
            </div>

            <div className="input">
              <label htmlFor="ConfirmP" className="text">
                Confirm Password<span>*</span>
              </label>
              <br />
              <input
              onChange={handleOnchangeCfmPass}
              required
                type="password"
                id="ConfirmP"
                className="inputInner"
              ></input>
              {passChk ?  (<div></div>) : (<span id="cfmPass">Password Not Matching</span>)}
            </div>
            <div className="bottom">
              <span id="terms">
                <input type="checkbox" id="checkbx" required></input>I accept the terms &
                condition
              </span>
              <br />
              <button
                type="submit"
                className="btn"
              >
                CREATE ACCOUNT
              </button>
              <br />
              <span id="condition">No Credit Card | Cancel Anytime</span>
            </div>
          </form>
        </div>
      </div>

      <div className={addClass === "toggle" ? "login " : "removelogin"}>
        <div className="logininput">
          <h2>Log in</h2>
          <div className="input">
            <label htmlFor="Email" className="text">
              Your Email
            </label>
            <br />
            <input type="email" id="Email" className="inputInner"></input>
          </div>

          <div className="input">
            <label htmlFor="Password" className="text">
              Your Password
            </label>
            <br />
            <input type="password" id="Password" className="inputInner"></input>
          </div>
          <span id="forgetP">Forgot Password?</span>
          <button id="loginbtn" className="btn">
            LOGIN
          </button>
        </div>
      </div>

      <div
        className={
          addClass === "toggle"
            ? "welcome-hello welcome-hello-left"
            : "welcome-hello"
        }
      >
        {/* <div className="welcome-hello welcome-hello-left"> */}
        {addClass === "toggle" ? <h1>Hello!</h1> : <h1>Welcome Back!</h1>}
        {addClass === "toggle" ? (
          <p>Kickstart your productivity journey today!</p>
        ) : (
          <p>Step back into a world of organized tasks and clear goals</p>
        )}
        <button
          className="btn "
          id="welcome-hello-btn"
          onClick={handleClick}
        >
          {addClass === "toggle" ? "CREATE ACCOUNT" : "LOGIN"}
        </button>
      </div>
    </div>
  );
}
export default Signup;
