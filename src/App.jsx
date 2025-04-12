// DO NOT DELETE

import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './Header.jsx'  // Headerコンポーネントをインポート
import { Description } from "./Description.jsx";
import { DogListContainer } from "./DogListContainer.jsx";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}