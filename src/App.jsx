// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <dev>
      <header>
        <h1>Dog アプリ</h1>
      </header>
      <body>
        <h2>犬の画像を表示するサイトです</h2>
        <img src={useState} alt="dog" />
      </body>
    </dev>
  )
}

useState(() => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/maltese/n02085936_3239.jpg');
})