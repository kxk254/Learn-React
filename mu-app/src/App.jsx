// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import Hello from "./Hello";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import TodoApp from "./TodoApp";
import Posts from "./Posts";

function App() {
  return (
    <div>
      {/* Multiple Hello components */}
      <Hello sir="Hello" name="Kenji" />
      <Hello sir="You are" name="JavaScript Wizard" />
      <Hello sir="I am" name="Frontend Master" />

      {/* Counter component */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <TodoApp />
      <Posts />
    </div>
    );
}

export default App
