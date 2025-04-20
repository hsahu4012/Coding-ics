import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react"
import "./App.css"
import UseStateExample from "./components/useStateExample"
import UseStateExample2 from "./components/UseStateExample2"
import UseStateExample3 from "./components/UseStateExample3"
import UseEffectExample from "./components/UseEffectExample"
import UseRefExample from "./components/UseRefExample"
import UseRefExample2 from "./components/UseRefExample2"
import UseMemoExample from "./components/useMemoExample"
import UseCallbackExample from "./components/UseCallbackExample"
import UseContextExample from "./components/UseContextExample"
import UseReducerExample from "./components/Reducer/UseReducerExample"
import UseLayoutExample from "./components/Layout/UseLayoutExample"
import CustomHooksExample from "./components/CustomHooks/CustomHooksExample"
import Forms from "./ControlledComponent/Forms"
import BestForm from "./ControlledComponent/BestForm"

function App() {


  return (
    <>
      {/*1. Hooks  */}
      {/* <UseStateExample /> */}
      {/* <UseStateExample2 /> */}
      {/* <UseStateExample3 /> */}
      {/* <UseEffectExample /> */}

      {/* <UseRefExample /> */}
      {/* <UseRefExample2 /> */}

      {/* <UseMemoExample /> */}

      {/* <UseCallbackExample /> */}

      {/* <UseContextExample /> */}

      {/* <UseReducerExample /> */}

      {/* <UseLayoutExample /> */}

      {/* <CustomHooksExample /> */}


      {/* 2. Forms & Controlled Components  */}
      {/* <Forms /> */}
      <BestForm />

    </>
  )
}

export default App


//  React Hooks
// -> Special Functions that allow us to use state and React features in functional components
// Give access to Life cycle method and state management( Sfter 16.8 version)

// Benefits
// Improve Code readability
// Reusability
// Overall Performance
// useState,useEffect, useRef, useMemo, useCallback, useContext, useReducer, useLayoutEffect

// 1. UseState: Create state variable, track state in component, update the user interface when state change

