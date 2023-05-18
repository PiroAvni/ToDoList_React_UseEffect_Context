import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./style.css";

function Login() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const { setUser } = useAuth();
  const goTo = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(inputValue);
    goTo('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="mr10">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="mr10 p10"
          placeholder="Type your Name"
          autoComplete="off"
          value={inputValue}
          onChange={handleInput}
          ref={inputRef}
        />
        <input type="submit" className="p10" />
      </form>
    </>
  );
}

export default Login;
